import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Task from "./Task";

//UseSelector hook is used here to simplify global state handling
//State are mapped and rendered conditionally if the user filters the task by completed or not-completed tasks.
//If none of the filter buttons are selected, all tasks are displayed in the UI

const ListTask = () => {

    const [doneOpen, SetDoneOpen] = useState(false)
    const [unDoneOpen, SetUnDoneOpen] = useState(false)

    const state = useSelector( state => state);

   const handleCompletedFilter = () => {
    SetDoneOpen(!doneOpen)
    SetUnDoneOpen(false)
   }

//the handle filter functions as shsown above and below are used to manipulate the local state to ensure that only 
//one filter button is selected at a time.

   const handleUnCompletedFilter = () => {
    SetUnDoneOpen(!unDoneOpen)
    SetDoneOpen(false)
   }

   const completedTask = state.tasks.filter(tasks => tasks.isDone === true )
//All completed task are filtered and stored in the completedTask variable as shown above

   const unCompletedTask = state.tasks.filter( tasks => tasks.isDone === false )
//All uncompleted task are filtered and stored in the unCompletedTask variable as shown above

    return (
        <>
        <header className="todo-page-header">
            <nav className="navigation-todo-page">
                <span><Link to='/' id='back-home'> Home</Link></span><span>About</span>
            </nav>
            <h1>Become focused, organized, and calm with Swift Todo <br/> A great task manager and to-do list app.</h1>
        </header>

        <section className="tasks-display-section">
            <div className="my-tasks-container">
                <h2>My Tasks</h2>
                <div className="filter">
                    <button className={`${ doneOpen === true && unDoneOpen === false ? 'active-done' : 'inactive-done'}`} onClick={handleCompletedFilter}>View Completed Tasks</button>
                    <button className={`${ unDoneOpen === true && doneOpen === false ? 'active-undone' : 'inactive-undone'}`} onClick={handleUnCompletedFilter}>View UnCompleted Tasks</button>
                </div>
            </div>

{/* in the code below, task are conditionally rendered
1. if the view completed task button is clicked
2. if the view uncompleted task button is clicked
3. if none of the buttons are clicked the whole available task is returned */}

            { doneOpen && completedTask.map( (task, i) => <Task {...task} key={i}/>)}

            { unDoneOpen && unCompletedTask.map( (task, i) => <Task {...task} key={i}/>) }

            { doneOpen === false && unDoneOpen === false && state.tasks.map( (tasks, i) => {
            return tasks.title.length > 0 && <Task {...tasks} key={i}/>
            })}

        </section>
        </>
    )
}

export default ListTask;

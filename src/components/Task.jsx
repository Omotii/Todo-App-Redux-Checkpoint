import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.css'
import { editTask, statusUpdate } from '../redux/action/action';

//in this component, the Task are displayed and received as props from the ListTask component.
//the status state done or undone is toggled on click
//edited tasks/updated status are dispatched with the useDispatch hook as shown in the code below.

const Task = ({id, description, isDone, title}) => {

    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [open, setOpen] = useState(false)

    const dispatchEdit = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchEdit(editTask({
            id: id,
            title: editTitle,
            description: editDescription,
            isDone: false
        }));
        setOpen(!open)
    }

    const handleStatus = () => {
        dispatchEdit(statusUpdate({
            id: id,
            title,
            description,
            isDone: !isDone
        }))
    }

    const handleClick = () => {
        setEditTitle(title)
        setEditDescription(description)
        setOpen(!open)
    }

    return (
        <>
        <section className='task-card'>
            <div className='title-container'>
                <h3 className={`${ isDone ? 'done-title-color': 'undone-title-color'}`}>{title}</h3>
                <p>{description} <span className='edit-task' onClick={handleClick}>edit task</span></p>
            </div>
            <p><span className='status' onClick={handleStatus}>Click to update Status</span> { isDone ? <span className='status-done'>Done</span> : <span className='status-undone'>Undone</span> }</p>
        </section>
            <form onSubmit={handleSubmit} className={`'edit-task-form' ${ open ? 'active1' : 'inactive1'} `}>
                <input type="text" id='task-type' name='title'  value={editTitle} onChange={ e => setEditTitle(e.target.value)} />
                <input type="text" id='task-description' name='description' value={editDescription} onChange={ e => setEditDescription(e.target.value)} />
                <button type='submit'>Update</button>
            </form>
        </>
    )
}

export default Task;
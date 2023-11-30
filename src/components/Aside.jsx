import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import './styles.css'

//this component displays the Add Task form as well as the Title list of the available Tasks
//It main purpose is to improve the UI

const Aside = () => {

    const state = useSelector( state => state )

    return (
        <aside>
            <AddTask/>
            <div className='aside-image'>
                <img src='/image/papertodo.png' alt='papertodo' />
            </div>
            <section className='projects-list'>
                <h4>All Projects</h4>
                { state.tasks.map( (task, i) => task.title.length > 0 && <p key={i}># {task.title}</p> )}
            </section>
        </aside>
    )
}

export default Aside;
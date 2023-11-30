import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action/action';
import './styles.css'

const AddTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();

// tasked are added by dispatching the new inputed task title and description with the handlesubmit function

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTask({
            id: Date.now(),
            title,
            description,
            isDone: false
        }))
        e.target.reset()
    }

    return (
        <section>
            <h4 className='add-task'>Add new Task</h4>
            <form onSubmit={handleSubmit} className='task-form'>
                <input type="text" id='task-type' name='title' placeholder='Task type' onChange={ e => setTitle(e.target.value) } />
                <input type="text" id='task-description' name='description' placeholder='Task description' onChange={ e => setDescription(e.target.value) } />
                <button type='submit'>Submit</button>
            </form>
        </section>       
    )
}

export default AddTask;

//The AddTask component is rendered in the Aside Component for styling purpose
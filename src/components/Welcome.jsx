import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

//the component is created for styling purpose only and also as means of depeening my understanding of working with react.
//everything is not so perfect as i have noticed. but this component primary purpose is for improving the UI

const Welcome = () => {

    const [userName, setUserName] = useState('');
    const [open, setOpen] = useState(false)

    const userRef = useRef();

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName(userRef.current.value)
        setOpen(!open)
    }

    return (
        <main className='welcome-main'>
            <div className='left-bg'></div>
            <section className='container'>
                <div className='img-container'>
                    <img src='/image/ladytodo.png' alt='ladytodo'/>
                </div>
                <div className='about-container'>                    
                     <div className='get-started'>About</div>
                </div>
                <div className='swift-container'>                
                    <h1><span>Swift</span> To-do</h1>
                    { userName.length > 0 && <div className='welcome-user'>Welcome {userName}</div>}
                    <img src='/image/logo.png' alt='logo' />
                    <p>Organize your work <br/>and life, finally.</p>
                </div>
                <div className='img-container'>
                    <img src='/image/handtodo.png' alt='ladytodo'/>
                </div>
                <div className='get-started-container'>
                    { userName.length === 0 ? <div className='get-started' onClick={handleToggle} >Join to use</div> :
                     <div className='get-started'><Link to='/todo' id='get-started'>Get Started</Link></div> }
                </div>
            </section>
            <div className={`form-back-focus ${ open ? 'form-back' : 'form-back-false'}`}></div>
            <form onSubmit={handleSubmit} className={`user-name-caption-container active ${ open ? 'active' : 'inactive'}`}>
                <p>Hello dear! <br/>choose a username</p>
                <input type="text" placeholder='Username' ref={userRef} />
                <button type='submit'>Submit</button>
                <div className='close' onClick={() => setOpen(!open)}>Close</div>
            </form>            
        </main>
    )
}

export default Welcome;
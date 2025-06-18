import './styles.css'
import UserArea from './UserArea/UserArea';

function Navigation({ UpdateLoginPress, UpdateRegisterPress, isLoggedIn }) {
    return (
        <>
        <div className="navContainer">
            <button className='HelpButton'>?</button>
            <div className='titleHolder'>
                <h1 className="title">GrowAGarden</h1>
            </div>
            <div className='buttonContainer'>
                <button className='login' onClick={() => UpdateLoginPress(true)}>Login</button>
                <button className='register' onClick={() => UpdateRegisterPress(true)}>Register</button>
            </div>
        </div>
        </>
    );
}

export default Navigation
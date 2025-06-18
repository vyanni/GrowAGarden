import './styles.css'
import WoodenFrame from '../../assets/WoodenButton.png'

function LoginScreen({ UpdateLoginPress, UpdateRegisterPress }) {
    return (
        <>
            <div className="loginScreen">
                <img className='imgbg' src={WoodenFrame} alt="" />
                <div className='elementContainer'>
                    <h1 className='loginText'>Login/Register to get Started!</h1>
                    <button className='loginButton' onClick={() => {UpdateLoginPress(true)}}>Log In</button>
                    <button className='registerButton' onClick={() => {UpdateRegisterPress(true)}}>Register</button>
                </div>
            </div>
        </>
    );
}
export default LoginScreen
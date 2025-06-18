import { useState } from 'react';
import '../styles.css';
import api from '../../../api/api.jsx'

function LoginScreenForm({ UpdateLoginPress, UpdateRegisterPress, UpdateUserStatus, SetUsername, SetPassword, SetGender, SetHeight, SetWeight, SetCalorieGoal, SetFlowerCount }) {
    
    const [firstLogin, SetFirstLogin] = useState(true)
    const [username, SetTempUsername] = useState('');
    const [password, SetTempPassword] = useState('');
    
    const ChangeUsername = (value) => {
        SetTempUsername(value);
        console.log(username)
    }

    const ChangePassword = (value) => {
        SetTempPassword(value);
        console.log(password)
    }

    function Login(username, password) {
        api.post(
            '/logins', {
                username: username,
                password: password
            }
        )
        .then((response) => {
            if(response.status === 200) {
                UpdateUserStatus(true);
                UpdateLoginPress(false);
                SetUsername(username);
                SetPassword(password);
                SetGender(response.data.gender);
                SetHeight(response.data.height);
                SetWeight(response.data.weight);
                SetCalorieGoal(response.data.caloriegoal);
                SetFlowerCount(response.data.flowerCount)
            }
            else {
                SetFirstLogin(false);
                SetTempUsername('');
                SetTempPassword('');
            }   
        })
        .catch((error) => {
            SetFirstLogin(false);
            SetTempUsername('');
            SetTempPassword('');
        }
        )


    }

    
    
    return(
        <div className='LoginContent'>
            <button className="XButton" onClick={() => {UpdateLoginPress(false); UpdateRegisterPress(false)}}>X</button>
            <p className='FormTitle'>Login</p>
            <p className='FormHeading'>Enter Username:</p>
            <input className="FormInput" type="text" value={username} onChange={(e) => ChangeUsername(e.target.value)} />
            <p className='FormHeading'>Enter Password</p>
            <input className="FormInput" type="password" value={password} onChange={(e) => ChangePassword(e.target.value)}/>
            {!firstLogin && <p className='InvalidLogin'>Invalid Username/Password</p>}
            <button className="SubmitButton" onClick={() => {
                Login(username, password);
                }}>Submit</button>
        </div>
    );
}

export default LoginScreenForm
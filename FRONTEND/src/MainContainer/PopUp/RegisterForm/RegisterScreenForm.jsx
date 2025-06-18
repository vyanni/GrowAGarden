import axios from 'axios';
import api from '../../../api/api.jsx'
import '../styles.css';
import { useState } from 'react';

function RegisterScreenForm({ UpdateLoginPress, UpdateUserStatus, UpdateRegisterPress, UpdateAfterRegisterPress, SetUsername, SetPassword }) {
    

    const [username, SetTempUsername] = useState('');
    const [password, SetTempPassword] = useState('');

    const ChangeUsername = (value) => {
        SetTempUsername(value);
    }

    const ChangePassword = (value) => {
        SetTempPassword(value);
    }
    
    return(
        <div className='LoginContent'>
            <p className='FormTitle'>Register</p>
            <button className="XButton" onClick={() => {UpdateRegisterPress(false), UpdateLoginPress(false)}}>X</button>
            <p className='FormHeading'>Enter New Username:</p>
            <input className="FormInput" type="text" value={username} onChange={(e) => ChangeUsername(e.target.value)}/>
            <p className='FormHeading'>Enter New Password</p>
            <input className="FormInput" type="password" value={password} onChange={(e) => ChangePassword(e.target.value)}/>
            <button className="SubmitButton" onClick={() => {
                UpdateRegisterPress(false); 
                UpdateAfterRegisterPress(true); 
                SetUsername(username);
                SetPassword(password);
                }
            }>Submit</button>
        </div>
    );
}

export default RegisterScreenForm
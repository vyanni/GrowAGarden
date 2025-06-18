import '../styles.css';
import { useState } from 'react';
import api from '../../../api/api.jsx'

function AfterRegisterScreenForm( { UpdateAfterRegisterPress, UpdateUserStatus, username, password, SetGender, SetHeight, SetWeight, SetCalorieGoal, SetFlowerCount }) {
    
    const [nextPage, SetNewNextPage] = useState(0);

    const SetNextPage = () => {
        SetNewNextPage((nextPage) => nextPage + 1)
    }

    const [gender, setTempGender] = useState('');
    const [height, setTempHeight] = useState('');
    const [weight, setTempWeight] = useState('');
    const [calorieGoal, setTempCalorieGoal] = useState('');
    
    const AddUser = (username, password, gender, height, weight, calorieGoal) => {
        api.post('/register', {
            idusername: username,
            password: password,
            gender: gender,
            height: parseFloat(height),
            weight: parseFloat(weight),
            caloriegoal: parseFloat(calorieGoal),
            idstatsbyday: JSON.stringify(2)
        })
        .then((response) => {
            console.log('User registered successfully:', response.data);
            SetGender(gender);
            SetHeight(height);
            SetWeight(weight);
            SetCalorieGoal(calorieGoal);
            SetFlowerCount(1); //Give the user 1 flower to start
        })
        .catch((error) => {
            console.error('Error registering user:', error);
        });
};

    return(
        <div className='LoginContent'>
            <p className='FormTitle'>Welcome!</p>
            <p className='FormHeading'>Before We Begin, Set up Your Account: </p>
            {
                (nextPage === 0) && <>
                <p className='FormHeading'>Enter Gender:</p>
                <input className="FormInput" type="text" value={gender} onChange={(e) => setTempGender(e.target.value)} />
                <button className="SubmitButton" onClick={() => {SetNextPage()}}>Next</button>
                </>
            }
            {
                (nextPage === 1) && <>
                <p className='FormHeading'>Enter Height in cm:</p>
                <input className="FormInput" type="text" value={height} onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) setTempHeight(val); 
                    }} />
                <button className="SubmitButton" onClick={() => {SetNextPage()}}>Next</button>
                </>
            }
            {
                (nextPage === 2) && <>
                <p className='FormHeading'>Enter Weight:</p>
                <input className="FormInput" type="text" value={weight} onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) setTempWeight(val); 
                    }} />
                <button className="SubmitButton" onClick={() => {SetNextPage()}}>Next</button>
                </>
            }
            {
                (nextPage === 3) && <>
                <p className='FormHeading'>Enter You Calore Goal!:</p>
                <input className="FormInput" type="text" value={calorieGoal} onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) setTempCalorieGoal(val); 
                    }} />
                <button className="SubmitButton" onClick={() => {AddUser(username, password, gender, height, weight, calorieGoal); UpdateAfterRegisterPress(false); UpdateUserStatus(true); SetCalorieGoal(calorieGoal);}}>All Done!</button>
                </>
            }
        </div>
    );
}

export default AfterRegisterScreenForm 
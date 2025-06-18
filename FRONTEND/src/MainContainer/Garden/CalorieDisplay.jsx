import './styles.css'
import api from '../../api/api.jsx'
import { useState } from 'react';
import axios from 'axios';

function CalorieDisplay({ username, calorieGoal, caloriesToday, SetCaloriesToday, LogCalorieToggle, ChangeCalorieDisplay, numFlowers, SetFlowerCount }) {
    
    const [caloriesInput, setCaloriesInput] = useState('');
    const [calorieMessage, SetCalorieMessage] = useState(false);

    function LogCalories(calories) {
            api.post('/loggingCalories', {
                username: username,
                calories: calories
            }.then(() => {
                SetCaloriesToday(parseInt(calories));
            })
        )
    }

    return(
        <>
            <div className="calorieContainer">
                <div className='calorieContainerInner'>
                    <div className='WelcomeSign'>
                        <div className='Welcome'>
                            <h3 className='WelcomeSignMessage'>Welcome {username}!</h3>
                        </div>
                    </div>
                    <div className='WelcomeMessage'>
                        {
                            ((calorieGoal - caloriesToday) > 50) && <p>You have <b>{calorieGoal - caloriesToday}</b> calories to log!</p>
                        }
                        {
                            (((calorieGoal - caloriesToday) < 50) && ((calorieGoal - caloriesToday) > -50)) && <p>You have reached your calorie goal! 🎉🎉🎉</p>
                        }
                        {
                            ((calorieGoal - caloriesToday) < -50) && <p>You are <b>{-1 * (calorieGoal - caloriesToday)}</b> over your limit today...</p>
                        }
                        <button className='calorieButton' onClick={() => {ChangeCalorieDisplay(); SetCalorieMessage(false)}}>Log Calories</button>
                         {LogCalorieToggle && 
                            <div  className='CalorieLogContainer'>
                                <p>Enter Calories Here:</p>
                                <input type='text' className='LogCalorieInput' value={caloriesInput} onChange={(e) => {
                                    const input = e.target.value;
                                    if (/^\d*$/.test(input)) { // allows only digits
                                    setCaloriesInput(input);
                                    }
                                }} ></input>
                                <div>
                                    <button className='calorieButton' onClick={() => {ChangeCalorieDisplay(); SetFlowerCount(numFlowers + 1); SetCalorieMessage(true); SetCaloriesToday(parseInt(caloriesInput)); LogCalories(caloriesInput)}}>Submit</button>
                                    <button className='calorieButton' onClick={() => ChangeCalorieDisplay()}>Cancel</button>
                                </div>
                            </div>
                        }
                        {
                            calorieMessage && <p>Logged {caloriesInput} Calories!</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalorieDisplay
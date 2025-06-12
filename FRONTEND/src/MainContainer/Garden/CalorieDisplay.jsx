import './styles.css'

function CalorieDisplay(user) {
    return(
        <>
            <div className="calorieContainer">
                <h3 className='Welcome'>Welcome {user.name}!</h3>
                <p className='WelcomeMessage'>You have <b>{user.calorieGoal - user.dailyCalorieTotal}</b> calories to log!</p>
                <button className='calorieButton'>Log Calories</button>
            </div>
        </>
    );
}

export default CalorieDisplay
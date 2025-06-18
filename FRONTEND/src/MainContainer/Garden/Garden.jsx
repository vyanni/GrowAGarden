
import { useState } from "react";
import CalorieDisplay from "./CalorieDisplay"
import FlowerContainer from "./FlowerContainer/FlowerContainer";

FlowerContainer
function Garden( { username, calorieGoal, caloriesToday, SetCaloriesToday, numFlowers, SetFlowerCount } ) {

 
    const [LogCalorieToggle, SetLogCalorieToggle] = useState(false);

    const ChangeCalorieDisplay = () => {
        SetLogCalorieToggle(!LogCalorieToggle);
    }
    
    return(
        <>
            <div className="UIContainer">
                <CalorieDisplay 
                username={username} 
                calorieGoal={calorieGoal} 
                LogCalorieToggle={LogCalorieToggle} 
                caloriesToday={caloriesToday}
                SetCaloriesToday={SetCaloriesToday}
                ChangeCalorieDisplay={ChangeCalorieDisplay} 
                numFlowers={numFlowers}
                SetFlowerCount={SetFlowerCount}> 

                </CalorieDisplay>
                <FlowerContainer
                numFlowers={numFlowers}
                SetFlowerCount={SetFlowerCount}
                ></FlowerContainer> 
            </div>
        </>
    );
}

export default Garden
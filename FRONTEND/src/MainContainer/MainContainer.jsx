import LoginScreen from "./LoginScreen/LoginScreen.jsx"
import Garden from "./Garden/Garden.jsx"
import LoginPopUp from "./PopUp/LoginForm/LoginPopUp.jsx";
import RegisterPopUp from "./PopUp/RegisterForm/RegisterPopUp.jsx";
import AfterRegisterScreenPopUp from "./PopUp/RegisterForm/AfterRegisterScreenPopUp.jsx";
import { useState } from "react";


function MainContainer({ 
    isLoggedIn, 
    LoginPress, 
    RegisterPress, 
    UpdateLoginPress, 
    UpdateRegisterPress, 
    AfterRegisterPress, 
    UpdateAfterRegisterPress, 
    UpdateUserStatus,
    username,
    SetUsername,
    password,
    SetPassword,
    gender, 
    SetGender,
    height, 
    SetHeight,
    weight, 
    SetWeight,
    calorieGoal, 
    SetCalorieGoal,
    caloriesToday,
    SetCaloriesToday,
    numFlowers,
    SetFlowerCount
    }) {


    return(<>
        {
            RegisterPress && <RegisterPopUp 
            UpdateAfterRegisterPress={UpdateAfterRegisterPress}
            UpdateRegisterPress={UpdateRegisterPress} 
            UpdateUserStatus={UpdateUserStatus} 
            UpdateLoginPress={UpdateLoginPress}
            SetUsername={SetUsername}
            SetPassword={SetPassword}
            ></RegisterPopUp>
        }
        {
            AfterRegisterPress && <AfterRegisterScreenPopUp
            UpdateAfterRegisterPress={UpdateAfterRegisterPress}
            UpdateUserStatus={UpdateUserStatus}
            username={username} 
            password={password} 
            SetGender={SetGender}
            SetHeight={SetHeight}
            SetWeight={SetWeight}
            SetCalorieGoal={SetCalorieGoal}
            numFlowers={numFlowers}
            SetFlowerCount={SetFlowerCount}
            ></AfterRegisterScreenPopUp>
        }
            {LoginPress && <LoginPopUp 
            UpdateLoginPress={UpdateLoginPress} 
            UpdateUserStatus={UpdateUserStatus} 
            UpdateRegisterPress={UpdateRegisterPress}
            SetUsername={SetUsername}
            SetPassword={SetPassword}
            SetGender={SetGender}
            SetHeight={SetHeight}
            SetWeight={SetWeight}
            SetCalorieGoal={SetCalorieGoal}
            SetFlowerCount={SetFlowerCount}
            ></LoginPopUp>
        }
        {isLoggedIn ? <Garden 
        username={username}
        calorieGoal={calorieGoal}
        caloriesToday={caloriesToday}
        SetCaloriesToday={SetCaloriesToday}
        numFlowers={numFlowers}
        SetFlowerCount={SetFlowerCount}
        ></Garden> 
        : <LoginScreen UpdateLoginPress={ UpdateLoginPress } UpdateRegisterPress={ UpdateRegisterPress } ></LoginScreen>}
        </>
    ); 

}

export default MainContainer
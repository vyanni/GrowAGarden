import LoginScreenForm from "./LoginScreenForm";
import '../styles.css';
import ScrollImage from "../../../assets/ScrollVertical.png"

function LoginPopUp({ UpdateLoginPress, UpdateUserStatus, UpdateRegisterPress, SetUsername, SetPassword, SetGender, SetHeight, SetWeight, SetCalorieGoal, SetFlowerCount}){
    return(
        <>
        <div className="LoginPopup">
            <div className="LoginPopupInner">
                <img className="ScrollImg" src={ScrollImage}/>
                <LoginScreenForm 
                UpdateLoginPress={UpdateLoginPress} 
                UpdateUserStatus={UpdateUserStatus} 
                UpdateRegisterPress={UpdateRegisterPress}
                SetUsername={SetUsername}
                SetPassword={SetPassword}
                SetGender={SetGender} 
                SetHeight={SetHeight} 
                SetWeight={SetWeight} 
                SetCalorieGoal={SetCalorieGoal}
                SetFlowerCount={SetFlowerCount} >
                    
                </LoginScreenForm>
            </div>
        </div>
        </>
    );
}

export default LoginPopUp
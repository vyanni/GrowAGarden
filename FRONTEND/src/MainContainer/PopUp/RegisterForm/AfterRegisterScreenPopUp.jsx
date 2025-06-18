import AfterRegisterScreenForm from "./AfterRegisterScreenForm";
import '../styles.css';
import ScrollImage from "../../../assets/ScrollVertical.png"

function AfterRegisterScreenPopUp({ UpdateAfterRegisterPress, UpdateUserStatus, SetGender, SetHeight, SetWeight, SetCalorieGoal, SetFlowerCount}){
    return(
        <>
        <div className="LoginPopup">
            <div className="LoginPopupInner">
                <img className="ScrollImg" src={ScrollImage}/>
                <AfterRegisterScreenForm 
                UpdateAfterRegisterPress={UpdateAfterRegisterPress} 
                UpdateUserStatus={UpdateUserStatus}
                SetGender={SetGender} 
                SetHeight={SetHeight} 
                SetWeight={SetWeight} 
                SetCalorieGoal={SetCalorieGoal} 
                SetFlowerCount={SetFlowerCount} >

                </AfterRegisterScreenForm>
            </div>
        </div>
        </>
    );
}

export default AfterRegisterScreenPopUp
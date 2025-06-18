import RegisterScreenForm from "./RegisterScreenForm";
import '../styles.css';
import ScrollImage from "../../../assets/ScrollVertical.png"

function RegisterPopUp({ UpdateRegisterPress, UpdateUserStatus, UpdateLoginPress, UpdateAfterRegisterPress, SetUsername, SetPassword }){
    return(
        <>
        <div className="LoginPopup">
            <img className="ScrollImg" src={ScrollImage}/>
            <div className="LoginPopupInner">
                <RegisterScreenForm 
                UpdateRegisterPress={UpdateRegisterPress} 
                UpdateUserStatus={UpdateUserStatus} 
                UpdateLoginPress={UpdateLoginPress}
                UpdateAfterRegisterPress={UpdateAfterRegisterPress}
                SetUsername={SetUsername}
                SetPassword={SetPassword}
                ></RegisterScreenForm>
            </div>
        </div>
        </>
    );
}

export default RegisterPopUp
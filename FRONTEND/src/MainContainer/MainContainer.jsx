import LoginScreen from "./LoginScreen/LoginScreen.jsx"
import Garden from "./Garden/Garden.jsx"

function MainContainer(user) {
    
    return user.isLoggedIn ? <Garden></Garden> : <LoginScreen></LoginScreen>

}

export default MainContainer
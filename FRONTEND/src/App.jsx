import './index.css'
import Navigation from './Navigation/Navigation';
import MainContainer from './MainContainer/MainContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    useEffect(() => {
    function updateScale() {
      const height = window.innerHeight;
      let scale = 2;

      if (height > 768) scale = 3;
      if (height > 1200) scale = 4;
      if (height > 1600) scale = 5;
      if (height > 2000) scale = 6;

      document.documentElement.style.setProperty('--scale', scale);
      console.log(`Height: ${height}, Scale set to: ${scale}`);
  }

    window.addEventListener('resize', updateScale);
    updateScale(); 


    return () => window.removeEventListener('resize', updateScale);
    }, []);


    const [LoginPress, SetLoginPress] = useState(false);
    const UpdateLoginPress = (NewButtonState) => {
        SetLoginPress(NewButtonState);
    }

    const [RegisterPress, SetRegisterPress] = useState(false);
    const UpdateRegisterPress = (NewButtonState) => {
        SetRegisterPress(NewButtonState);
    }

    const [AfterRegisterPress, SetAfterRegisterPress] = useState(false);
    const UpdateAfterRegisterPress = (value) => {
      SetAfterRegisterPress(value)
    }

    const [isLoggedIn, SetUserStatus] = useState(false)

    const UpdateUserStatus = (UserStatus) => {
      SetUserStatus(UserStatus);
    }

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const [gender, SetGender] = useState('');
    const [height, SetHeight] = useState('');
    const [weight, SetWeight] = useState('');
    const [calorieGoal, SetCalorieGoal] = useState('');
    const [caloriesToday, SetNewCaloriesToday] = useState(0)
    const [numFlowers, SetFlowerCount] = useState(0)
    const SetCaloriesToday = (value) => {
      SetNewCaloriesToday((caloriesToday) => caloriesToday + value);
    }

  return(
    <>
      <Navigation 
      UpdateLoginPress={UpdateLoginPress} 
      UpdateRegisterPress={UpdateRegisterPress}
      isLoggedIn={isLoggedIn}
      >   
      </Navigation>
      <MainContainer 
      gender={gender} 
      SetGender={SetGender}
      height={height} 
      SetHeight={SetHeight}
      weight={weight} 
      SetWeight={SetWeight}
      calorieGoal={calorieGoal} SetCalorieGoal={SetCalorieGoal}
      username={username} 
      SetUsername={SetUsername}
      password={password} 
      SetPassword={SetPassword}
      caloriesToday={caloriesToday}
      SetCaloriesToday={SetCaloriesToday}
      isLoggedIn={isLoggedIn} 
      LoginPress={LoginPress} 
      AfterRegisterPress={AfterRegisterPress}
      RegisterPress={RegisterPress}
      UpdateAfterRegisterPress={UpdateAfterRegisterPress}
      numFlowers={numFlowers}
      SetFlowerCount={SetFlowerCount}
      UpdateLoginPress={UpdateLoginPress}
      UpdateRegisterPress={UpdateRegisterPress}
      UpdateUserStatus={UpdateUserStatus}
      >

      </MainContainer>
    </>
  );

}

export default App

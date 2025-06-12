import './index.css'
import Navigation from './Navigation/Navigation';
import MainContainer from './MainContainer/MainContainer';
function App() {

  return(
    <>
      <Navigation></Navigation>
      <MainContainer isLoggedIn={true}></MainContainer>
    </>
  );

}

export default App

import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css"
import MyImage from './Logo.png';


export default function AuthPage({setUser}) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      
      <h1 className="app-name">Weather<img className="app-logo" src={MyImage} alt=""/></h1>
      
      <div className="signup-login">
        <p className="numba-won">THE #1 RATED WEATHER APP IN MY <span className="span-heart">Heart</span></p>
        <div className="signupform">
        {showSignUp ?
          <SignUpForm setUser={setUser}/>
          :
          <LoginForm setUser={setUser}/>
        }

        <center>
        <button className="button-2" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Aleady have an Account? Log In Here' : 'No Account? Sign Up Here'}</button>
        </center>
        
        </div>
      </div>
    </main>
  );
}
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { useState } from 'react';
import Logout from './Logout';

function App(props) {

  // console.log(props.handlelogin)
  // console.log(props.handlelogout)
  

  const [showlogoutButton, setShowlogoutButton] = useState(props.handlelogout);
  const [showloginButton, setShowloginButton] = useState(props.handlelogin);
//   const onSignoutSuccess = () => {
//     alert("You have been logged out successfully");
//     console.clear();
//     setShowloginButton(true);
//     setShowlogoutButton(false);
// };

const setlogin=(val)=>{
 props.login(val)

}
const setlogout=(val)=>{
  props.logout(val)

}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Logout login={showloginButton} logout={showlogoutButton} handlelogout={setlogout} handlelogin={setlogin}/>
      {/* <Logout /> */}



      {/* <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                  </GoogleLogout> */}
    </div>
  );
}

export default App;

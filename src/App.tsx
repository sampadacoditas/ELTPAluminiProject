import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/Logins/Login';
import { SignUp } from './Pages/SignUp/SignUp';
import { MainRouters } from './MainRouters/MainRouters';
import { RoutesData } from './Routes/Routes';

function App() {
  return (
    <div className="App">
       <MainRouters array={RoutesData}/>
      {/* <Login/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;

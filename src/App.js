import React, {useContext} from 'react';
import {firebaseAuth} from './provider/AuthProvider'
import {Route, Switch} from 'react-router-dom'
import Signup from './component/Signup'
import SignIn from './component/SignIn'
import Home from './component/Home'

import logo from './logo.svg';
import './App.css';

function App() {
  const {handleSignup, token} = useContext(firebaseAuth)
  console.log(token)
  return (
    <>
    {/* switch allows switching which components render.  */}
      <Switch>
        {/* route allows you to render by url path */}
        <Route exact path='/' render={rProps => token === null ? <SignIn/> : <Home/>} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={SignIn} />

      </Switch>
    </>
  );
}

export default App;

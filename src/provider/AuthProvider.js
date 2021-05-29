import React, {useState} from 'react';
import {authMethods} from '../firebase/authMethods'

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token"))

  const handleSignup = () => {
    // middle man between firebase and signup 
    console.log(errors)
    // calling signup from firebase server
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken)
  }

  const handleSignIn = () => {
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
  }

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken)
  }

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignIn,
        handleSignout,
        inputs,
        setInputs,
        errors,
        token,
      }}>
        {props.children}
    </firebaseAuth.Provider>
  );
};



export default AuthProvider;
export const firebaseAuth = React.createContext()

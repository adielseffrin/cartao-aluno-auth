import {auth} from './firebase'

export const authMethods = {
  signup: (email, password, setErrors, setToken) => {
    auth.createUserWithEmailAndPassword(email,password) 
    .then(async res => {
      const token = await Object.entries(res.user)[5][1].b
      await localStorage.setItem('token', token)
      setToken(window.localStorage.token)
    })
    .catch(err => {
      setErrors(prev => ([...prev, err.message]))
    })
  },
  signin: (email, password, setErrors, setToken) => {
    auth.signInWithEmailAndPassword(email,password) 
    .then(async res => {
      const token = await Object.entries(res.user)[5][1].b
      await localStorage.setItem('token', token)
      console.log(token)
      console.log("token")
      await console.log(window.localStorage.token)
      await setToken(window.localStorage.token)
    })
    .catch(err => {
      setErrors(prev => ([...prev, err.message]))
    })
  },
  signout: (setErrors, setToken) => {
    auth.signOut().then( res => {
      localStorage.removeItem('token')
        setToken(null)
    })
    .catch(err => {
      setErrors(prev => ([...prev, err.message]))
      localStorage.removeItem('token')
      setToken(null)
      console.error(err.message)
    })
  },
}
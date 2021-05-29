// add useContext
import React, {useContext} from 'react';
import { firebaseAuth } from '../provider/AuthProvider'

const SignIn = () => {
  const {handleSignIn, inputs, setInputs, errors} = useContext(firebaseAuth)

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('handleSubmit')
      handleSignIn()

  }

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }
// TODO criar UI dessa tela
  return (
    <form onSubmit={handleSubmit}>
      {/* replace the div tags with a form tag */}
      SignIn
      {/* make inputs  */}
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <button >SignIn</button>
      {errors.length > 0 ? errors.filter((error, index) => errors.indexOf(error) === index).map( (error, index) => <p key={{index}} style={{color: 'red'}}>{error}</p> ) : null}
    </form>
  );
};

export default SignIn;
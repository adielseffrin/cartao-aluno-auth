// add useContext
import React, {useContext} from 'react';
import { firebaseAuth } from '../provider/AuthProvider'
import {withRouter} from 'react-router-dom'

const Signup = (props) => {
  const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)

  const handleSubmit = async (e) => {
      e.preventDefault()
      await handleSignup()
      props.history.push('/')

  }

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }
// TODO criar UI dessa tela
  return (
    <form onSubmit={handleSubmit}>
      {/* replace the div tags with a form tag */}
      Signup
      {/* make inputs  */}
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <button >signup</button>
      {errors.length > 0 ? errors.filter((error, index) => errors.indexOf(error) === index).map( (error, index) => <p key={{index}} style={{color: 'red'}}>{error}</p> ) : null}
    </form>
  );
};

export default withRouter(Signup);
import React from 'react'
import pokedexImg from "../../imgs/icons8-smartphone-96.png"
import "./styles.css"
import { LogInProps } from '../../utils/interfaces';
import { useLogIn } from '../../customHooks/useLogIn';

export const LogIn = (props:LogInProps) => {

  const {
    handleSubmit,
    email,
    password,
    handleEmailChange,
    handlePasswordChange
  } = useLogIn(props.logIn)
  return (
    <div className='FormLI--layout'>
      <img src={pokedexImg} alt="" />
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className='FormLogIn'>
        <label className='FormLogIn--label' htmlFor="email">Email</label>
        <input onChange={handleEmailChange} className='FormLogIn--input' type="text" value={email}/>
        <label className='FormLogIn--label' htmlFor="password">Password</label>
        <input onChange={handlePasswordChange} className='FormLogIn--input' type="password"  value={password}/>
        <button className='FormLogIn--button' type='submit'>Log In</button>
      </form>
    </div>
  )
}

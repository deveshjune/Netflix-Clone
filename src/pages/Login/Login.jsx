import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from '../../Firebase.js'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
  const[signState, setSignState]=useState("Sign In")
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  const user_auth=async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email,password);
    }else{
      await signup(name,email,password);
    }
    setLoading(false);
  }
 
  return (
    loading?<div className="login-spinner">
    <img src={netflix_spinner}alt=""/>
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className="login-form">
        <h2>{signState}</h2>
        <form>
          {signState==="Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='your name'/>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
            <input type='checkbox'/>
            <label htmlFor='remember me'>remember me</label>
          </div>
          <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign up now</span></p>:
          <p>Already have an account<span onClick={()=>{setSignState("Sign In")}}>Sign in now</span></p>}
          
          
        </div>
      </div>
      
    </div>
  )
}

export default Login

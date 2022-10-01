import React from 'react'
import CompHead from '../../../Components/CompHead'
import "../LoginSignup.css"
function SignupTemp(props) {
  return (
    <div className='SignupTemp'>
        <CompHead h1={props.childern} span={props.children} h2={props.children} span2={props.children}/>
        <div className='SignupTemp_cont'>
            {props.children}
        </div>
        <p>{props.children}</p>
          <p>{props} <span>Login</span></p>
    </div>
  )
}

export default SignupTemp
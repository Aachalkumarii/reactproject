import React, { useState } from 'react';
import bg from './bg.jpeg';

{/*import React from 'react'*/}

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin (true)}>Login</button>
                <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin (false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Sign IN Form</h2>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <a href='#'>Forgot Password?</a>
                <button>Login</button>
                <p>Not a Member? <a href='#' onClick={()=> setIsLogin(false)}>Signup now</a></p>
            </div>
            </> : <>
            <div className='form'>
            <h2>Signup Form</h2>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <input type='password' placeholder=' confirm password' />
                <button>SignUp</button>
                </div>
            </>}
        </div>
    </div>
  )
}

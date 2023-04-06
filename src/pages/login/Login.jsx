import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Aditya Social</h3>
                <span className="loginDesc">
                    Connect with friends in a single click
                </span>
            </div>

            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" id="Email" className="loginInput" placeholder='Email Id:'/>
                    <input type="password" id="Password" className="loginInput" placeholder='Password'/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

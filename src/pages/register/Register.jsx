import React from 'react'
import "./register.css"

export default function Register() {
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
                    <input type="text" className="loginInput" placeholder='Username'/>
                    <input type="text" className="loginInput" placeholder='Email Id:'/>
                    <input type="password" className="loginInput" placeholder='Password'/>
                    <input type="password" className="loginInput" placeholder='Password Repeat'/>
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Log into account</span>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from "react";
import "./style.css";
// require('dotenv').config()
// import GITHUB from '../../config';
const keys = require('../../config').clientID;

// import GameHeader from "../components/GameHeader";
const url = 'https://github.com/login/oauth/authorize?client_id=' + keys;



function LoginPages() {
  // return (
  //   <div>
  //     <h1>Hey There!!</h1>
  //   </div>
  // ************************ ADD THE HEADER DIV AND NAVIGATION DIV *******************************
  // );
      return (
        <div className="inner-container">
          <div className="header">
            <h1 className="game-intro">Sign In or Register your account</h1>
          </div>
          <div className="login-box"> 
          <p className="Login-text">Sign In</p>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
                <br></br>
                <button className="signin-btn">Sign In</button>
            </div>
  
            {/* <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin
              .bind(this)}>Login</button> 
              go to componets for button attributes*/}
          </div>
          <div className="outter-container">
          <div className="header">
            Register
          </div>
          <div className="Registration-box">
            <div className="input-group">
              <p htmlFor="github-email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="login-input"
                placeholder="Github Email"/>
            </div>
            <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="login-input"
                placeholder="Character's name"/>
            </div>
            <div className="input-group">
              <p className="register-password">Create a password</p>
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                name="register-password"
                className="register-password"
                placeholder="Register password"/>
                <br></br>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>

              <button className="sugnin-btn" type="submit" id="github">
                <a href = {url}>Sign in With Github</a>
                </button>      
                </div>
          </div>
          </div>
        </div>
      );
    }

export default LoginPages;
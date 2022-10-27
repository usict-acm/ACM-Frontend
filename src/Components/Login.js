import React from "react";
import "./Assests/CSS/login.css";

function Login() {
  return (
    <div className="login">
      <div className="innerBox">
        <div className="logo">
         <img className="ussAcm" src="https://usict.acm.org/assets/images/acm-logo.svg"/>
        </div>
        <div className="divider"></div>
        <form>
          <h2>Login...</h2>
          <div className="inputs">
            <input
              className="inputField"
              type="text"
              placeholder="Username..."
            />
            <i className="fa-solid fa-user"></i>
          </div>
          
          <div className="inputs">
            <input
              className="inputField"
              type="password"
              placeholder="Password..."
            />
            <i class="fa-solid fa-lock"></i>
          </div>
          <div className="checkbox">
           <div>
            <input type="checkbox" />
            <label>Remember me</label>
           </div>
            
          </div>
          <button className="loginBtn">Login</button>

        </form>
      </div>
    </div>
  );
}

export default Login;

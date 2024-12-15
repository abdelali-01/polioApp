import React from "react";
import "./sign.css"

export default function SignIn() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="loginPage text-center">
      <div className="formCard">
        <img src={PF + "Logo.svg"} alt="" width={"100"}  className="mb-4"/>

        <h5 className="fw-bold">Sign In </h5>
        <div className="btnCard mt-3">
          <span>
            <img src={PF + "googleIcon.png"} alt="" />
          </span>
          <span>Sign in with Google</span>
        </div>
        <div className="btnCard mt-3">
          <span>
            <img src={PF + "appleIcon.png"} alt="" />
          </span>
          <span>Sign in with Apple</span>
        </div>
        <br />
        <p>OR</p>
        <form action="">
            <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email"/>
            </div>
        </form>
      </div>
    </div>
  );
}

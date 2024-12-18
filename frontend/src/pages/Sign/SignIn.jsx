import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="loginPage">
      <div className="formCard">
        <div className="buttomFormCard text-center">
          <img src={PF + "Logo.svg"} alt="" width={"100"} className="mb-4" />

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
        </div>
        <form action="" className="w-100">
          <div className="input  d-flex gap-2 mt-3 flex-column">
            <label className="fw-semibold" htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input d-flex gap-2 mt-3 flex-column position-relative">
            <label className="fw-semibold" htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" />
            <span role="button" className="position-absolute text-black-50" style={{
                right : "0"
            }}>
              Forgot your password?
            </span>
          </div>
          <button className="btn btn-dark my-4 w-100">Sign In</button>
          <Link to={"/signup"}>
          <button className="btn btn-outline-dark w-100 joinPolio" >
            <span>Don’t have an account?</span>
            <span>Join Polio</span>
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

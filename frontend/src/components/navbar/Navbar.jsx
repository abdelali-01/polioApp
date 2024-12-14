import React from 'react'

export default function Navbar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  return (
    <div >
      <nav className="navbar container navbar-expand-lg">
      <img className="navbar-brand" src={`${PF}Logo.svg`} alt="Logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn btn-outline-dark my-2 my-sm-0 mx-sm-1" type="submit">
            Sign in
          </button>
          <button className="btn btn-dark my-2 my-sm-0" type="submit">
            Start for free
          </button>
        </form>
      </div>
    </nav>
    </div>
  )
}

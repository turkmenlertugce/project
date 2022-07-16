import React, { Component } from "react"
import {Link} from "react-router-dom";

const Nav = (props) => {

  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>Home</Link>
          <div className="collapse navbar-collapse">
            {
              props.user ? 
              (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={'/'} onClick = {() => {
                      localStorage.clear();
                      props.setUser(null);
                    }} className="nav-link">Logout</Link>
                  </li>
                </ul>
              ) :
              (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={'/login'} className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/register'} className="nav-link">Register</Link>
                  </li>
                </ul>
              )
            }    
          </div>
      </div>
    </nav>
  )
}

export default Nav

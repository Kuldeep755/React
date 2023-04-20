import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Kuldeep
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to ="/">
                    Login
                  </NavLink>
                </li>
                ) : (
                  " "
                )}
                {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to ="/productlist">
                    cart
                  </NavLink>
                </li>
                ) : (
                  ""
                )}

                {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to ="/customers">
                    Customers
                  </NavLink>
                </li>
                ) : ( 
                  ""
                )}
                {this.props.isLoggedIn  ? (
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to ="/Newuser">
                    Newuser
                  </NavLink>
                </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
import React from "react";
import logo from "../Assets/Images/logo.svg"
import hamburger from "../Assets/Images/icon-hamburger.svg"

import "../Assets/Styles/NavBar.scss"

function NavBar(){
    return(
        <nav className="main-nav flex-space">
            <img src={logo} alt="Insure Company Logo" />
            <img src={hamburger} alt="Mobile Menu" />
        </nav>
    )
}

export default NavBar;
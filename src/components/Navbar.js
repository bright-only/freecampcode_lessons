import React from "react"; 
import logo from "../images/logo.svg";

export default function Navbar() 
{
    return (
        <nav>
            <img src={logo} alt="logo" className="App-Logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}


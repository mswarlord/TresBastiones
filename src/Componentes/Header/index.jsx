import React from "react";
import './Header.css';
import logo from "./tres-bastiones-logo.png";

export const Header = ({title, subtitle}) => {
    return(
        <div className="header">
            <img src={logo} alt='logo' className="logo" />
            <div className="title">
                <h1> {title} </h1>
                <h2> {subtitle} </h2>
            </div>
        </div>
    )
}

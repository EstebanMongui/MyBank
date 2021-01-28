import React from "react";
import "./Header.scss";
//Components
import ExitButton from "../Buttons/ExitButton/ExitButton.jsx";

const Header= () => (
    <div className="Header">
        <h3 className="__Logo">My<span>Bank</span></h3>
        <nav>
            <ul className="__Items">
                <li><a href="">Credits</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Laws</a></li>
            </ul>
        </nav>
        <ExitButton ButtonText="exit" />
    </div>
)

export default Header;

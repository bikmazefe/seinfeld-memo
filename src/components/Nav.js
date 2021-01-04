import React from 'react';
import Logo from '../logo.jpg'

function Nav(props) {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt=""/>
                <h1>Memory Cards</h1>
            </div>
            <div className="scoreboard">
                <span>Current Score: {props.currentScore}</span>
                <span>Top Score: {props.topScore}</span>
            </div>
        </nav>
    );
}

export default Nav;
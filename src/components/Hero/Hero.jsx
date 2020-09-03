import React from 'react';
import ArrowIcon from "./Arrow"
import "./hero.scss"

function Hero() {
    return (
    <div className="hero-wrapper">
        <div className="background">
            <img src={require("./background.jpg")} alt="Hero background"/>
        </div>
        <div className="hero">
            Bringing ideas
            <br/>to <span>life</span>
        </div>
        <ArrowIcon/>
    </div>
    );
}

export default Hero;

import React from 'react';
import ArrowIcon from "./Arrow"
import "./hero.scss"
import Bounce from 'react-reveal/Bounce';

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

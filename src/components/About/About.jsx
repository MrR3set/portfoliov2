import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import {Skills} from "./Skills"
import "./about.scss"

function About() {
    console.log(Skills)
    return (
    <div className="about-wrapper">
        <h1 className="title">Who am I?</h1>
        <div className="description">
        <p>My name is Bairon (pronounced "Byron"), I am a Full stack developer that loves coding and building things. I have been coding for 5 years now. Programing is my passion!</p> 

        <p>I am always extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with new ideas to solve problems.</p>
        </div>
        <div className="content">
            <div className="skills-wrapper">
                <h1>My skills</h1>
                <div className="skills">
                    {
                        Skills.map(skill=>
                            <div className="skill">
                                <p>{skill.name}</p>
                                <p>{skill.time}</p>
                            </div>)
                    }
                </div>
            </div>
            <div className="social">
                <h1>Reach me out in here:</h1>
                <div className="links">
                    <a href="https://github.com/MrR3set" target="__blank"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/" target="__blank"><LinkedInIcon/></a>
                    <a href="mailto:byronpaz.dev@gmail.com"><EmailIcon/></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;

import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Featured({project}) {


    return (
    <div className={`project-wrapper ${project.id%2!==0?"right":"left"}`}>

        <div className="media">
            <a href={project.deployed_url} target="__blank">
                <img src={require(`${project.media}`)} alt=""/>
            </a>
        </div>

        <div className="content">

            <div className="header">
                <h1>{project.title}</h1>
                <p>{project.organization} | {project.date}</p>
            </div>

            <p className="description">{project.description}</p>

            <div className="tools">
                {project.tools.map(tool=>{
                    return <p>{tool}</p>
                })}
            </div>
            <div className="links">
                <a href={project.github_url} target="__blank"><GitHubIcon/></a>
                <a href={project.deployed_url} target="__blank"><OpenInNewIcon/></a>
            </div>
        </div>
    </div>
    );
}

export default Featured;

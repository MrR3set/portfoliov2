import React from 'react';
import {projectData} from "./projectsData"
import "./Projects.scss"
import Featured from './Featured';

function Projects() {
    console.log(projectData)

    return (
    <div className="projects-wrapper">

        <h1 className="title">Projects</h1>


        {/* Import the featured ones */}
        <div className="featured">
            {projectData.filter(project=>project.featured===true)
            .map(project=><Featured project={project} key={project.id}></Featured>)}
        </div>
        {/* Import noteworthy ones */}

    </div>
    );
}

export default Projects;

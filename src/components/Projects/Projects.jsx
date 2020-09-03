import React, { useState, useEffect }  from 'react';
import Project from "./Project"
import {projectData} from "./projectsData"


function Projects() {

    return (
    <div className="projects-wrapper">
        {projectData.map(project=>{
            return <Project key={project.id} project={project}/>
        })}
    </div>
    );
}

export default Projects;

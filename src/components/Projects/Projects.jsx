import React, { useState, useEffect }  from 'react';
import Project from "./Project"
import {projectData} from "./projectsData"

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function Projects() {

    const forceUpdate = useForceUpdate();

    return (
    <div className="projects-wrapper">
        {projectData.map(project=>{
            return <Project key={project.id} project={project}/>
        })}
    </div>
    );
}

export default Projects;

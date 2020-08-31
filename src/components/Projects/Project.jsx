import React from 'react';



function Project({project}) {
    console.log(project)

    return (
    <div className="project">
        
        <div className="title">
            <p>{project.name}</p>
        </div>
        <div className="tools">
            {project.tools.map(tool=><p>{tool}</p>)}
        </div>
        <div className="actions">
            <button>View more</button>
        </div>
    </div>
    );
}

export default Project;

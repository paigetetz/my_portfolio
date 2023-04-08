import React from 'react';
import Project from './Project';
import projects from './Data.js';
function ProjectContainer() {
	return (
		<div>
			<div className='flex flex-row flex-wrap justify-center'>
				{projects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}

export default ProjectContainer;

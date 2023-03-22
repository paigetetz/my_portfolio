import React from 'react';
import Project from './Project';
function ProjectContainer({ projects }) {
	return (
		<div className='flex-direction: row flex-wrap:wrap'>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	);
}

export default ProjectContainer;

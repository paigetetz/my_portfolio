import React from 'react';
import Project from './Project';
function ProjectContainer({ projects }) {
	return (
		<div>
			<h1 className='text-3xl font-bold text-cloudy pb-4 text-center m-10'>
				Project Portfolio
			</h1>
			<div className='flex flex-row flex-wrap justify-center'>
				{projects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}

export default ProjectContainer;

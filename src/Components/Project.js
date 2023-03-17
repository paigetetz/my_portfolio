import React from 'react';

function Project({ project }) {
	return (
		<div>
			<h1>{project.name}</h1>
			<h3>{project.description}</h3>
			<h4>{project.tech}</h4>
			<h6>{project.github}</h6>
		</div>
	);
}

export default Project;

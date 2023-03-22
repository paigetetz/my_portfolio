import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function Project({ project }) {
	return (
		<div className='bg-white border-2 border-gold rounded-md p-8 shadow-md w-full max-w-xl m-10 text-cloudy'>
			{project && project.images ? (
				<Carousel
					showArrows={true}
					showStatus={false}
					showThumbs={false}
					infiniteLoop={true}
				>
					{project.images.map((image, id) => (
						<div key={id}>
							<img src={image} alt='Website Images' w-full />
						</div>
					))}
				</Carousel>
			) : (
				<p>Loading...</p>
			)}
			<div className='mt-6 text-center'>
				<h2 className='text-2xl font-bold'>{project.name}</h2>
				<p className=' mt-4 text-lg'>{project.description}</p>
				<p>Tech Used: {project.tech}</p>
				<a
					href={project.demo}
					target='_blank'
					rel='noopener noreferrer'
					className='m-auto hover:text-gold duration-300'
				>
					Demo
				</a>
				<a
					href={project.github}
					target='_blank'
					rel='noopener noreferrer'
					className='mx-3 hover:text-gold duration-300'
				>
					Code
				</a>
			</div>
		</div>
	);
}

export default Project;

import React from 'react';
import AboutImage from '../Images/AboutImage.jpg';

function About(props) {
	return (
		<div className='flex flex-col mx-3 px-3 py-2 border border-sage rounded-md my-3 sm:flex-row'>
			<div className='w-full sm:w-1/2 sm:pr-4'>
				<img
					src={AboutImage}
					alt='about'
					className='w-full flex items-center rounded-md'
				/>
			</div>
			<div className='w-full sm:w-1/2 p-4 text-cloudy'>
				<h1 className='text-2xl font-bold text-cloudy pb-4'>About Me</h1>
				<p className='text-lg pb-4'>
					Hi there, I'm Paige Tetzlaff, a full-stack software engineer. My
					journey to software engineering started when I studied Mandarin
					Chinese in college and had the opportunity to study abroad. Speaking
					the language helped me navigate and appreciate the culture during my
					travels.
				</p>
				<p class='text-lg pb-4'>
					After college, I worked in retail management, where I honed my
					collaboration, leadership, and problem-solving skills, all of which
					are essential in programming. Then, I wound up transitioning into
					tech. Coding felt like solving a puzzle. That passion brought me to
					the Flatiron School, where I gained a strong foundation in web
					development and software engineering.
				</p>
				<p class='text-lg pb-4'>
					I specialize in building React Rails websites and have used my
					knowledge of JavaScript and Ruby to create seamless user experiences.
					However, I am always looking to expand my skill set and stay
					up-to-date with the latest technologies in the field. To that end, I
					am currently studying Python, Django, and Mongo DB to shift my focus
					to building React Django websites. This transition will allow me to
					create more dynamic and complex web applications.
				</p>
				<p class='text-lg pb-4'>
					When I'm not coding, you can find me spending time with my dog,
					exploring new places through travel, and practicing yoga to stay
					centered and focused. In addition, my background in Mandarin Chinese
					has instilled in me a sense of curiosity and appreciation for diverse
					cultures and ways of thinking, which I bring to everything I do as a
					software engineer. Thank you for visiting my portfolio site! Feel free
					to reach out if you have any questions or would like to collaborate on
					a project.
				</p>
			</div>
		</div>
	);
}

export default About;

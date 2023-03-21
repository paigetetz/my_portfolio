import React from 'react';
import HomeImage from '../Images/HomeImage.jpg';

function About(props) {
	return (
		<div className='flex flex-col mx-3 px-3 py-2 border border-sage rounded-md my-3 sm:flex-row flex items-center'>
			<div className='w-full sm:w-1/2 sm:pr-4'>
				<img
					src={HomeImage}
					alt='about'
					className='w-full flex items-center rounded-md border-2 border-gold'
				/>
			</div>
			<div className='w-full sm:w-1/2 p-4 text-cloudy font-display'>
				<h1 className='text-2xl font-bold text-cloudy pb-4'>About Me</h1>
				<p className='text-lg pb-4'>
					Hi there, I'm Paige Tetzlaff, a full-stack software engineer and a
					recent graduate from Flatiron School's software engineering bootcamp.
					Flatiron gave me a solid basis in Object Oriented Programming,
					specifically React, Rails, Javascript, and Ruby.
				</p>
				<p class='text-lg pb-4'>
					Before venturing into tech, I studied Mandarin Chinese at Ohio State
					University. While there, I had the opportunity to study abroad.
					Speaking the language helped me navigate and appreciate the culture
					during my travels. After college, the pandemic hit, so I shifted to
					retail management, where I built up my problem-solving, teamwork, and
					leadership skills. I moved up the ladder in these positions and
					learned to be adaptable and open to new ideas.
				</p>
				<p class='text-lg pb-4'>
					Ultimately, I decided customer service wasn't my passion, so I looked
					into other options. That is when I began to consider the tech industry
					and first tried out coding. It was love at first sight. I appreciated
					the challenge it presented. Coding felt like solving a complex puzzle.
					From there, I applied to Flatiron School.
				</p>
				<p class='text-lg pb-4'>
					After graduating, I saw the need to adapt and learn new technologies.
					This led me to study Python and Django to build React Django projects.
					I believe in lifelong learning and am fascinated by the latest
					industry trends and best practices. This focus has led me to become an
					adaptable and versatile engineer, able to tackle challenges head-on
					and deliver exceptional results.
				</p>
				<p class='text-lg pb-4'>
					But life isn't all about coding! When I'm not in front of my computer,
					I spend quality time with my rescue dog, Toby. I also love traveling
					to explore new places, practicing yoga, or getting lost in a book.
					Thank you for visiting my portfolio site! Feel free to reach out if
					you have any questions or would like to collaborate on a project. I'm
					available on LinkedIn, and the contact me form to connect via email.
				</p>
			</div>
		</div>
	);
}

export default About;

import React from 'react';
import HomeImage from '../Images/HomeImage.jpg';
function Home(props) {
	return (
		<div className='flex flex-col mx-3 px-3 py-2 border border-sage rounded-md my-3 sm:flex-row'>
			<div className='w-full sm:w-1/2'>
				<img
					src={HomeImage}
					alt='home'
					className='w-full flex items-center rounded-md'
				/>
			</div>
			<div className='w-full sm:w-1/2 p-4 text-cloudy'>
				<h1 className='text-2xl font-bold text-cloudy pb-4'>
					Welcome! My name is Paige
				</h1>
				<h2>I am a Full Stack Developer</h2>
				<h3>React | Ruby on Rails | Javascript | Python</h3>
				<p>Feel free to checkout my work and get to know me better.</p>
			</div>
		</div>
	);
}

export default Home;

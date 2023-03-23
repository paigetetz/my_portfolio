import React from 'react';
// import Project from './Project';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
function ProjectContainer({ projects }) {
	let classicImages = [
		'https://i.imgur.com/xWtcZv9.png',
		'https://i.imgur.com/bvzEzvO.png',
		'https://i.imgur.com/NsexOdX.png',
		'https://i.imgur.com/003kmTn.png',
		'https://i.imgur.com/6xMotCr.png',
		'https://i.imgur.com/CE2w4Sm.png',
		'https://i.imgur.com/EGlFoJV.png',
	];
	let wanderImages = [
		'https://i.imgur.com/u31BJu3.jpg',
		'https://i.imgur.com/AQwoOn7.jpg',
		'https://i.imgur.com/xQePdRO.jpg',
		'https://i.imgur.com/jEUbkJI.jpg',
		'https://i.imgur.com/1wepOMC.jpg',
		'https://i.imgur.com/NPE8zBP.jpg',
		'https://i.imgur.com/XTdLOEB.jpg',
		'https://i.imgur.com/rZPmBJd.jpg',
	];
	let diveImages = [
		'https://i.imgur.com/HY5nj2j.png',
		'https://i.imgur.com/0zRhC67.jpg',
		'https://i.imgur.com/3GnQn8s.jpg',
		'https://i.imgur.com/9qsqPgr.png',
		'https://i.imgur.com/ePMeXnG.png',
		'https://i.imgur.com/pAxzLTu.png',
		'https://i.imgur.com/1xnTjEO.png',
	];
	let portfolioImages = [
		'https://i.imgur.com/2WqGuLv.png',
		'https://i.imgur.com/XW3D6xD.jpg',
		'https://i.imgur.com/wICbVPZ.png',
		'https://i.imgur.com/IwdUoGD.png',
	];
	return (
		<div>
			<h1 className='text-3xl font-bold text-cloudy pb-4 text-center m-10'>
				Project Portfolio
			</h1>
			<div className='flex flex-row flex-wrap justify-center'>
				{/* Classics List */}
				<div className='bg-white border-2 border-gold rounded-md p-8 shadow-md w-full max-w-xl m-10 text-cloudy'>
					<Carousel
						showArrows={true}
						showStatus={false}
						showThumbs={false}
						infiniteLoop={true}
					>
						{classicImages.map((image, id) => (
							<div key={id}>
								<img src={image} alt='Website Images' className='w-full' />
							</div>
						))}
					</Carousel>
					<div className='mt-6 text-center'>
						<h2 className='text-2xl font-bold'>Classics List</h2>
						<p className='mt-4 text-lg'>
							Classics List is a book review website that offers a platform for
							book enthusiasts to share their reviews and engage with other
							like-minded individuals. The platform incorporates user profile
							management, allowing users to easily access and delete their
							reviews.
						</p>
						<p>Tech Used: React, Rails, Vanilla CSS</p>
						<a
							href='https://www.loom.com/share/a88fdd29cb104f6ab673dc0e3db5ac42'
							target='_blank'
							rel='noopener noreferrer'
							className='m-auto hover:text-gold duration-300'
						>
							Demo
						</a>
						<a
							href='https://github.com/paigetetz/ClassicsList'
							target='_blank'
							rel='noopener noreferrer'
							className='mx-3 hover:text-gold duration-300'
						>
							Code
						</a>
					</div>
				</div>
				{/* Wander */}
				<div className='bg-white border-2 border-gold rounded-md p-8 shadow-md w-full max-w-xl m-10 text-cloudy'>
					<Carousel
						showArrows={true}
						showStatus={false}
						showThumbs={false}
						infiniteLoop={true}
					>
						{wanderImages.map((image, id) => (
							<div key={id}>
								<img src={image} alt='Website Images' className='w-full' />
							</div>
						))}
					</Carousel>
					<div className='mt-6 text-center'>
						<h2 className='text-2xl font-bold'>Wander</h2>
						<p className='mt-4 text-lg'>
							Wander is a platform that specializes in curating unique travel
							experiences around the world. The platform offers a user-friendly
							interface that enables users to browse various experiences and
							leave comments/reviews to enhance the experience of future
							wanderers. The platform also allows users to share their travel
							experiences and help others plan their trips.
						</p>
						<p>Tech Used: React, Rails, Vanilla CSS</p>
						<a
							href='https://www.loom.com/share/c77a4b18784a4f33990455231b19b4b9'
							target='_blank'
							rel='noopener noreferrer'
							className='m-auto hover:text-gold duration-300'
						>
							Demo
						</a>
						<a
							href='https://github.com/paigetetz/Wander'
							target='_blank'
							rel='noopener noreferrer'
							className='mx-3 hover:text-gold duration-300'
						>
							Code
						</a>
					</div>
				</div>

				{/* Divr */}
				<div className='bg-white border-2 border-gold rounded-md p-8 shadow-md w-full max-w-xl m-10 text-cloudy'>
					<Carousel
						showArrows={true}
						showStatus={false}
						showThumbs={false}
						infiniteLoop={true}
					>
						{diveImages.map((image, id) => (
							<div key={id}>
								<img src={image} alt='Website Images' className='w-full' />
							</div>
						))}
					</Carousel>
					<div className='mt-6 text-center'>
						<h2 className='text-2xl font-bold'>Divr</h2>
						<p className='mt-4 text-lg'>
							Divr is a website that allows users to research and plan their
							scuba diving experiences. Users can search for specific dive
							sites, as well as suggest new dive sites.
						</p>
						<p>Tech Used: React, Vanilla CSS</p>
						<a
							href='https://www.loom.com/share/db4cce33c4bf484ea7aaca1a6b11ad06'
							target='_blank'
							rel='noopener noreferrer'
							className='m-auto hover:text-gold duration-300'
						>
							Demo
						</a>
						<a
							href='https://github.com/paigetetz/Divr'
							target='_blank'
							rel='noopener noreferrer'
							className='mx-3 hover:text-gold duration-300'
						>
							Code
						</a>
					</div>
				</div>
				{/* Portfolio */}
				<div className='bg-white border-2 border-gold rounded-md p-8 shadow-md w-full max-w-xl m-10 text-cloudy'>
					<Carousel
						showArrows={true}
						showStatus={false}
						showThumbs={false}
						infiniteLoop={true}
					>
						{portfolioImages.map((image, id) => (
							<div key={id}>
								<img src={image} alt='Website Images' className='w-full' />
							</div>
						))}
					</Carousel>
					<div className='mt-6 text-center'>
						<h2 className='text-2xl font-bold'>Portfolio</h2>
						<p className='mt-4 text-lg'>
							An clear example of my work is this portfolio website.
						</p>
						<p>Tech Used: React, Tailwind CSS</p>
						<a
							href='https://paigetetzlaff.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
							className='m-auto hover:text-gold duration-300'
						>
							Demo
						</a>
						<a
							href='https://github.com/paigetetz/my_portfolio'
							target='_blank'
							rel='noopener noreferrer'
							className='mx-3 hover:text-gold duration-300'
						>
							Code
						</a>
					</div>
				</div>
				{/* <div className='flex flex-row flex-wrap justify-center'>
				{projects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div> */}
			</div>
		</div>
	);
}

export default ProjectContainer;

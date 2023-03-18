import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar(props) {
	return (
		<div class='shadow bg-sage text-offwhite'>
			<div class='h-16 mx-auto px-5 flex items-center justify-between'>
				<h3 class='text-2xl text-offwhite'>
					Paige Tetzlaff: Full Stack Software Engineer
				</h3>
				<NavLink
					className='hover:text-gold transition-colors duration-200'
					exact
					to='/home'
				>
					Home
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-200'
					exact
					to='/about'
				>
					About
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-200'
					exact
					to='/projects'
				>
					Projects
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-200'
					exact
					to='/contact'
				>
					Contact
				</NavLink>
			</div>
		</div>
	);
}

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/Logo.png';
function NavBar(props) {
	return (
		<div class='shadow bg-sage text-offwhite m-3 rounded-md'>
			<div class='h-20 mx-auto px-5 flex items-center justify-between'>
				{/* <h3 class='text-2xl text-offwhite'>
					Paige Tetzlaff: Full Stack Software Engineer
				</h3> */}
				<img src={Logo} alt='Logo' className='w-20' />
				<NavLink
					className='hover:text-gold transition-colors duration-300'
					exact
					to='/home'
				>
					Home
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-300'
					exact
					to='/about'
				>
					About
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-300'
					exact
					to='/projects'
				>
					Projects
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-300'
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

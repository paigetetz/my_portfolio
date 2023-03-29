import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';
function NavBar(props) {
	return (
		<div className='shadow bg-sage text-offwhite m-3 rounded-md'>
			<div className='h-20 mx-auto px-5 flex items-center justify-between'>
				<Link to='/home'>
					<img src={Logo} alt='Logo' className='w-20' />
				</Link>
				<NavLink
					className='hover:text-gold transition-colors duration-300 text-xl'
					exact
					to='/home'
				>
					Home
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-300 text-xl'
					exact
					to='/about'
				>
					About
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-300 text-xl'
					exact
					to='/projects'
				>
					Projects
				</NavLink>
				<NavLink
					className='hover:text-gold transition-colors duration-300 text-xl'
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

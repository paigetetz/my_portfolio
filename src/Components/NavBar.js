import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar(props) {
	return (
		<div>
			<h3>Paige Tetzlaff: Full Stack Software Engineer</h3>
			<NavLink className='navlink' exact to='/home'>
				Home
			</NavLink>
			<NavLink className='navlink' exact to='/about'>
				About
			</NavLink>
			<NavLink className='navlink' exact to='/projects'>
				Projects
			</NavLink>
			<NavLink className='navlink' exact to='/contact'>
				Contact
			</NavLink>
		</div>
	);
}

export default NavBar;

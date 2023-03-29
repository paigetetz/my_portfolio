import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../Images/Landing.png';
function LandingPage(props) {
	return (
		<Link to='/home'>
			<div className='flex h-screen items-center justify-center'>
				<img src={Landing} alt='Logo' class='w-1/2' />
			</div>
		</Link>
	);
}

export default LandingPage;

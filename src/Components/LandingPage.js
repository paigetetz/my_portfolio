import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage(props) {
	return (
		<Link to='/home'>
			<div>
				<h1>
					My name is Paige Tetzlaff, and I'm a Full Stack Software Engineer.
				</h1>
				<h3>Feel free to explore my work</h3>

				<img
					src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohail-nachiti-807598.jpg&fm=jpg'
					alt='Plants'
				/>
			</div>
		</Link>
	);
}

export default LandingPage;

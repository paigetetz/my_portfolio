import React from 'react';
import NotFoundImage from '../Images/NotFoundImage.png';

function NotFound(props) {
	return (
		<div class='flex h-screen items-center justify-center'>
			<img src={NotFoundImage} alt='404' class='w-1/2' />
		</div>
	);
}

export default NotFound;

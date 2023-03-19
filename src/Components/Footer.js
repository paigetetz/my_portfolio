import React from 'react';

function Footer(props) {
	return (
		<div class='bg-sage px-20 py-12 mx-3 space-y-8 overflow-hidden sm:px-6 lg:px-8 text-offwhite rounded-md '>
			<nav class='flex flex-wrap justify-center -mx-5 -my-2'>
				<div class='px-5 py-2'>
					<a
						href='https://www.linkedin.com/in/paigetetzlaff/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gold'
					>
						LinkedIn
					</a>
				</div>
				<div class='px-5 py-2'>
					<a
						href='https://github.com/paigetetz'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gold'
					>
						GitHub
					</a>
				</div>
				<div class='px-5 py-2'>
					<a
						href='https://medium.com/@paigetetz'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gold'
					>
						Medium
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Footer;

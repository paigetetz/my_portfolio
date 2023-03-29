import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
	return (
		<div
			className='bg-sage px-20 py-12 m-3 space-y-8 overflow-hidden sm:px-6 lg:px-8 text-offwhite rounded-md mt-auto mb-0 '
			// style={{ minHeight: 'vh' }}
		>
			<nav className='flex justify-center -mx-5 -my-2'>
				<div class='px-5 py-2'>
					<a
						href='https://www.linkedin.com/in/paigetetzlaff/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gold duration-300'
					>
						<FontAwesomeIcon icon={faLinkedin} size='3x' />
					</a>
				</div>
				<div className='px-5 py-2'>
					<a
						href='https://github.com/paigetetz'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gold duration-300'
					>
						<FontAwesomeIcon icon={faGithub} size='3x' />
					</a>
				</div>
				<div className='px-5 py-2'>
					<a
						href='https://medium.com/@paigetetz'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gold duration-300'
					>
						<FontAwesomeIcon icon={faMedium} size='3x' />
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Footer;

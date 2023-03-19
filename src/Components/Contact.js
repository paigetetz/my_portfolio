import React, { useState } from 'react';
import ContactImage from '../Images/ContactImage.jpg';
function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('https://formspree.io/f/xwkjnerw', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus('success');
				setFormData({ name: '', email: '', message: '' });
			} else {
				setStatus('error');
			}
		} catch (error) {
			setStatus('error');
		}
	};

	return (
		<div className='flex flex-col lg:flex-row w-full max-w-3xl mx-auto my-10 text-cloudy mt-1 px-3 py-2 border border-sage rounded-md'>
			<div className='w-full lg:w-auto flex-none mx-auto'>
				<img
					src={ContactImage}
					alt='Butterfly on a flower'
					className='max-w-sm rounded-md mr-4'
				/>
			</div>
			<div className='flex-grow text-center mx-auto lg:mx-0'>
				<h2 className='text-2xl mb-6 text-cloudy'>Let's Connect</h2>
				{status === 'success' && <p className='mb-4'>Talk to you soon!</p>}
				{status === 'error' && (
					<p className='mb-4'>Error sending message. Please try again.</p>
				)}
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='w-full px-3 py-2 border border-cloudy rounded-md focus:outline-none focus:border-gold'
						/>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full px-3 py-2 border border-cloudy rounded-md focus:outline-none focus:border-gold'
						/>
					</div>
					<div>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-700'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							rows='4'
							className='w-full px-3 py-2 border border-cloudy rounded-md focus:outline-none focus:border-gold'
						></textarea>
					</div>
					<button
						type='submit'
						className='w-full py-2 px-4 bg-sage text-offwhite font-medium rounded-md hover:bg-gold'
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
export default Contact;

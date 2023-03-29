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
		<div className='flex flex-col lg:flex-row w-full max-w-2xl mx-auto mt-14 mb-14 text-cloudy mt-1 px-3 py-2 border border-sage rounded-md'>
			<div className='w-full lg:w-auto flex-none mx-auto'>
				<img
					src={ContactImage}
					alt='Butterfly on a flower'
					className='w-full lg:max-w-sm object-cover rounded-md mr-0 lg:mr-4 mb-4 lg:mb-0 border-2 border-gold'
				/>
			</div>
			<div className='flex-grow text-center mx-auto lg:mx-0'>
				<h2 className='text-3xl mb-7 text-cloudy'>Let's Connect</h2>
				{status === 'success' && (
					<p className='mb-4 text-gold'>Talk to you soon!</p>
				)}
				{status === 'error' && (
					<p className='mb-4 text-gold'>
						Error sending message. Please try again.
					</p>
				)}
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-cloudy'
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
							className='block text-sm font-medium text-cloudy'
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
							className='block text-sm font-medium text-cloudy'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							rows='8'
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

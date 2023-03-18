import React, { useState } from 'react';

const Contact = () => {
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
		<div className='w-full max-w-md mx-auto mt-10 text-cloudy'>
			<h2 className='text-2xl mb-6 text-center text-cloudy'>Contact Form</h2>
			{status === 'success' && (
				<p className='text-green-500 text-center mb-4'>
					Message sent successfully!
				</p>
			)}
			{status === 'error' && (
				<p className='text-red-500 text-center mb-4'>
					Error sending message. Please try again.
				</p>
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
						className='mt-1 w-full px-3 py-2 border border-cloudy rounded-md focus:outline-none focus:border-gold'
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
						className='mt-1 w-full px-3 py-2 border border-cloudy rounded-md focus:outline-none focus:border-gold'
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
						className='mt-1 w-full px-3 py-2 border border-cloudy rounded-md focus:outline-none focus:border-gold'
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
	);
};

export default Contact;

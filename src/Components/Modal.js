import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ResumeModal = () => {
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<div className='flex justify-center items-center mt-8'>
			<button
				onClick={openModal}
				className='bg-sage hover:bg-gold duration:300 text-offwhite font-bold py-2 px-4 rounded'
			>
				View Resume
			</button>
			<Modal
				isOpen={modal}
				onRequestClose={closeModal}
				className='Modal fixed inset-x-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg max-w-5xl w-full h-[calc(95%)] overflow-y-auto'
				overlayClassName='Overlay fixed inset-0 bg-cloudy bg-opacity-50 z-40'
			>
				<iframe
					src={`${process.env.PUBLIC_URL}/ModalResume.pdf`}
					title='Resume'
					className='ResumeIframe w-full h-[calc(90%)] border-none'
				/>
			</Modal>
		</div>
	);
};

export default ResumeModal;

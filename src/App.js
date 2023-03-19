import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import ProjectContainer from './Components/ProjectContainer';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

function App(props) {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/projects')
			.then((resp) => resp.json())
			.then((data) => setProjects(data));
	}, []);

	const location = useLocation();
	const isLandingPage = location.pathname === '/';

	return (
		<div className='bg-offwhite min-h-screen font-display'>
			{!isLandingPage && <NavBar />}
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route
					path='/projects'
					element={<ProjectContainer projects={projects} />}
				/>
				<Route path='/project/:id' element={<Project />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			{!isLandingPage && <Footer />}
		</div>
	);
}
export default App;

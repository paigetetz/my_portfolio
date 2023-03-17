import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import ProjectContainer from './Components/ProjectContainer';
import NotFound from './Components/NotFound';

function App(props) {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/projects')
			.then((resp) => resp.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<div className='App'>
			<NavBar />
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
		</div>
	);
}

export default App;

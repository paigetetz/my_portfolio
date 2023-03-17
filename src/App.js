import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';

function App(props) {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/projects')
			.then((resp) => resp.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<div>
			<h1>Projects</h1>
		</div>
	);
}

export default App;

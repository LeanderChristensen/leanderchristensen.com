import './App.css';
import ProjectsTable from './ProjectsTable';
import React, { useState } from 'react';

function App() {
	const [spinClass, setSpinClass] = useState('');
	const handleClick = () => {
		setSpinClass('spin');
		setTimeout(() => {
			setSpinClass('');
		}, 1000);
	};
  return (
	<>
    	<div id="headlineInfo">
			<div id="headlineInfoLeft">
        		<div id="faceContainer" className={spinClass} onClick={handleClick}>
        			<img src="/face.jpg" id="face" alt="Leander's face"/>
				</div>
		</div>
		<div id="headlineInfoRight">
      		<p id="name">👋🏻 Hey, I'm Leander</p>
			<div className="socialText"><a href="https://github.com/LeanderChristensen" target="_blank"><i className="fa-brands fa-github"></i><p className="socialTextText">Github</p></a></div>
			<div className="socialText"><a href="https://www.linkedin.com/in/leanderchristensen/" target="_blank"><i className="fa-brands fa-linkedin"></i><p className="socialTextText">LinkedIn</p></a></div>
		</div>
    	</div>
		<div id="projects"><p id="projectsText">Projects</p><a href="https://l-c.io/fun"><p id="gamesText">Games ➔</p></a>
			<ProjectsTable />
		</div>
    </>
  )
}

export default App

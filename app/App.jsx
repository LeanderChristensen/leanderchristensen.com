import Link from "next/link";
import './assets/inter.css';
import './App.css';
import face from "./assets/face.jpg";
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
        			<img src={face.src} id="face" alt="Leander's face"/>
				</div>
		</div>
		<div id="headlineInfoRight">
      		<p id="name">👋🏻 Hey, I'm Leander</p>
			<div className="socialText"><a href="https://github.com/LeanderChristensen" target="_blank"><i className="fa-brands fa-github"></i><p className="socialTextText">Github</p></a></div>
			<div className="socialText"><a href="https://linkedin.com/in/leanderchristensen/" target="_blank"><i className="fa-brands fa-linkedin"></i><p className="socialTextText">LinkedIn</p></a></div>
		</div>
    	</div>
		<Link className="frontButton" href="/projects">Projects</Link>
		<a className="frontButton" href="https://leanderchristensen.com/fun">Games</a>
		<Link className="frontButton" href="/likes">Likes</Link>
    </>
  )
}

export default App

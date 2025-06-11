'use client'

import Link from "next/link";
import '../assets/inter.css';
import '../App.css';
import './style.css';

function Likes() {
  return (
	<>
		<Link id="backButton" href="/"><i className="fa-solid fa-arrow-left" id="backArrow"></i> Back to Home</Link>
		<h1 id="projectHeadline">Likes</h1>
		<div id="projectsTable">
			<Link className="frontButton" href="/albums">Projects</Link>
			<Link className="frontButton" href="/likes">Likes</Link>
    	</div>
    </>
  )
}

export default Projects
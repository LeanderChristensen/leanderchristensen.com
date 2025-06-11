'use client'

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../assets/inter.css';
import '../App.css';
import './style.css';

function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('/projects.json')
			.then((response) => response.json())
			.then((data) => setProjects(data.projects));
	}, []);
  return (
	<>
		<Link id="backButton" href="/"><i className="fa-solid fa-arrow-left" id="backArrow"></i> Back to Home</Link>
		<h1 id="projectHeadline">Projects</h1>
		<div id="projectsTable">
    	    {projects.map((project, index) => (
    	    	<div className="projectCard" key={index}>
    	    		<p className="projectTitle">{project.name}</p>
    	    		<p className="projectDesc">{project.description}</p>
    	    		<p className="projectTech">{project.tech}</p>
					{project.tech2 !== "0" && (
        				<p className="projectTech">{project.tech2}</p>
      				)}
					{project.tech3 !== "0" && (
        				<p className="projectTech">{project.tech3}</p>
      				)}
					<br />
					<a href={project.link} className="projectButton" target="_blank"><i className="fa-brands fa-github"></i> Github</a>
					{project.link2 !== "0" && (
        				<a href={project.link2} className="projectButton" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
      				)}
				</div>
    	    ))}
    	</div>
    </>
  )
}

export default Projects
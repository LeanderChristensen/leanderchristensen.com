import React, { useState, useEffect } from 'react';
import './App.css';

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <table id="projectsTable">
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td style={{width: "30%"}}><a href={project.link} target="_blank">{project.name}</a></td>
            <td style={{width: "56%"}}><a href={project.link} target="_blank">{project.description}</a></td>
            <td style={{width: "14%"}}><a href={project.link} target="_blank">{project.tech}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;

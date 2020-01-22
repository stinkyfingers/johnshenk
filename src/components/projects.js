import React  from 'react';
import projects from '../projects';
import '../css/projects.css';

const Projets = () => {

	const renderProjects = () => {
		let p = [];
		for (const i in projects) {
			if (!projects[i]) {
				continue;
			}
			p.push(<div className="project" key={i}>
				<h3>{projects[i].name}</h3>
				<div className="repo">{projects[i].repo}</div>
				<div className="summary">{projects[i].summary}</div>
			</div>);
		}
		return (<div className="projectList">{p}</div>);
	}

  return (
    <div className="projectsApp">
    <h1>Projects</h1>
    	{this.renderProjects()}
    </div>
  );
}

export default Projects;

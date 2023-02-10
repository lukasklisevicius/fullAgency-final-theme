import React from 'react';
import Project from '../components/Project'
import Header from '../parts/Header';




function Projects(props) {
const arr = props.projects

    return (
        <section id='projects'>
            <Header light={props.projectsPage.titleLight} bold={props.projectsPage.titleBold}/>
            {arr.map(project =>{
                return(<Project key={[project.postId]} tags={project.tags.edges} project={project.project_post}></Project>)
            }
            )}
        </section>
    );
  }
  
  export default Projects;
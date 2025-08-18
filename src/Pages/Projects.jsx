import React from 'react';
import Navbar from '../Components/Navbar';
import ProjectsComponent from '../Components/Projects'; 
import Footer from '../Components/Footer'; 

function ProjectsPage() { 
  return (
    <div className="projects-page">
      <Navbar/>
      <ProjectsComponent/> 
      <Footer/>
    </div>
  );
}

export default ProjectsPage; 
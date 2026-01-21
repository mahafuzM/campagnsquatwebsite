import React, { useEffect } from 'react'; // 1. useEffect import koro
/* Components Import */
import ProjectHero from '../components/ProjectHero';
import ProjectFilter from '../components/ProjectFilter';
import Contact from '../components/Contact';

const Projects = () => {

  // 2. Page load holei scroll top-e niye jabe
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A]">
      <ProjectHero />

      <ProjectFilter />

      <Contact />
    </div>
  );
};

export default Projects;
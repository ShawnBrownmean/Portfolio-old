import React from 'react';
import ProjectItem from './ProjectItem';

import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';

function Projects() {
  return (
    <div id= 'projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'> 
        <h1 className='text-4xl font-bold text-center text-[#043797] '>Projects</h1>
        <p className='text-center py-8'>My best Projects</p>

        <div className='grid sm:grid-cols-2 gap-12'>
            <a href="/demo">
              <ProjectItem img={portfolio1} title='portfolio1'/>
            </a>
            <a href="/demo2">
              <ProjectItem img={portfolio2} title='portfolio2'/>
            </a>
            <a href="/demo3">
              <ProjectItem img={portfolio3} title='portfolio3'/>
            </a>
            <a href="/demo4">
              <ProjectItem img={portfolio4} title='portfolio4'/>
            </a>
            <a href="/demo5">
              <ProjectItem img={portfolio5} title='portfolio5'/>
            </a>
            <a href="/demo6">
              <ProjectItem img={portfolio6} title='portfolio6'/>
            </a>

        </div>
    </div>

  );
}

export default Projects;

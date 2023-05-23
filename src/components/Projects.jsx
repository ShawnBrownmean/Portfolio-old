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
        <h1 className='text-4xl font-bold text-center text-[#043797] p-1 m-2 py-5 '>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
        <a href="/demo1">
          <ProjectItem
            img={portfolio1}
            title='Portfolio 1'
            codeLink='https://github.com/ShawnBrownmean/Portfolio.git'
            demoLink='https://demo-link-portfolio1.com'
          />
        </a>
        <a href="/demo2">
          <ProjectItem
            img={portfolio2}
            title='Portfolio 2'
            codeLink='https://github.com/your-username/portfolio2'
            demoLink='https://demo-link-portfolio2.com'
          />
        </a>
        <a href="/demo3">
          <ProjectItem
            img={portfolio3}
            title='Portfolio 3'
            codeLink='https://github.com/your-username/portfolio3'
            demoLink='https://demo-link-portfolio3.com'
          />
        </a>
        <a href="/demo4">
          <ProjectItem
            img={portfolio4}
            title='Portfolio 4'
            codeLink='https://github.com/your-username/portfolio4'
            demoLink='https://demo-link-portfolio4.com'
          />
        </a>
        <a href="/demo5">
          <ProjectItem
            img={portfolio5}
            title='Portfolio 5'
            codeLink='https://github.com/your-username/portfolio5'
            demoLink='https://demo-link-portfolio5.com'
          />
        </a>
        <a href="/demo6">
          <ProjectItem
            img={portfolio6}
            title='Portfolio 6'
            codeLink='https://github.com/your-username/portfolio6'
            demoLink='https://demo-link-portfolio6.com'
          />
        </a>
      </div>
    </div>

  );
}

export default Projects;
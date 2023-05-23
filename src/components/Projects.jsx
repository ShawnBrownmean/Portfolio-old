import React from 'react';
import ProjectItem from './ProjectItem';
import items from '../portfolioItems'

function Projects() {
  return (
    <div id= 'projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'> 
        <h1 className='text-4xl font-bold text-center text-[#043797] p-1 m-2 py-5 '>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
          {items.map((item, idx) => {
            return (
               <a href={`/demo${idx}`} key={idx}>
                <ProjectItem
                  img={item.image}
                  title={item.title}
                  codeLink={item.codeLink}
                  demoLink={item.demoLink}
                />
               </a>
            )
          })}
      </div>
    </div>

  );
}

export default Projects;

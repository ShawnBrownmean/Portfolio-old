import React from 'react';

function ProjectItem({ img, title, codeLink, demoLink }) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#043797]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <div className="grid grid-cols-2 gap-4">
          <a href={codeLink} className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Code</a>
          <a href={demoLink} className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

import React from 'react';
import WorkItem from './WorkItem';

const data = [ 
  {
    year: 2021,
    title: 'Freelancer',
    duration: '2 years',
    details: 'I became a freelancer and started to teach myself how to program.',
  },
];

function Work() {
  return (
    <div id='work' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#043797]'>work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} /> 
      ))}
    </div>
  );
}

export default Work;

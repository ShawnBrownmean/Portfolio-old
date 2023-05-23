import React from 'react'

import { FaCode, FaDatabase, FaChartBar } from 'react-icons/fa';

function Skills() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className='text-4xl font-bold text-center p-2 m-2 py-5 text-[#043797] '>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <FaCode className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className="text-gray-700">Experience in various programming languages and frameworks.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <FaDatabase className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-700">Proficient in SQL and database administration.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <FaChartBar className="text-4xl mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-700">Skilled in analyzing and interpreting data for insights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
import  { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail,} from 'react-icons/ai';
import { FaBriefcase, FaCode  } from 'react-icons/fa';

function SideNav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden '
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/99 flex flex-col justify-center items-center z-20'>
          <a onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-on duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'> home </span>
          </a>
          <a onClick={handleNav}
            href='#work'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-on duration-200'
          >
            <FaBriefcase size={20}  className='text-white'/>
            <span className='pl-4 color'> work </span>
          </a>
          <a onClick={handleNav}
            href='#skills'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-on duration-200'
          >
            <FaCode size={20}  className='text-white'/>
            <span className='pl-4 color'> skills </span>
          </a>
          <a onClick={handleNav}
            href='#projects'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#3f4b61] m-2 p-4 cursor-pointer hover:scale-110 ease-on duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'> projects </span>
          </a>
          <a onClick={handleNav}
            href='#contact'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-[#3f4b61] m-2 p-4 cursor-pointer hover:scale-110 ease-on duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'> contact </span>
          </a>
        </div>
      ) : (
        ''
      )} 
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' className='rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href='#work' className='rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaBriefcase size={20}/>
                </a>
                <a href='#skills' className='rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaCode  size={20}/>
                </a>
                <a href='#projects' className='rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                <a href='#contact' className='rounded-full shadow-lg text-white bg-[#3f4b61] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>


    </div>
  );
}

export default SideNav;

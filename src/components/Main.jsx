import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Main() {
  return (
    <div id='main' className="flex flex-col items-center justify-center h-screen">
      <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 flex flex-col items-center justify-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Shawn Brown</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Web Developer', // Types 'One'
              2000, // Waits 1s
              'Mobile Developer', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/SBdevelops" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer" size={20} />
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
             <FaFacebookF className="cursor-pointer" size={20} />
        </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer" size={20} />
        </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer" size={20} />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Main;

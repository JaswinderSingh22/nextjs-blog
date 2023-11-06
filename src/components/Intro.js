import Image from 'next/image';
import React from 'react';
import profileLogo from "../assets/profile2.jpeg"; 

function Intro() {
  return (
    <div className="w-full h-[50rem] text-white flex p-5 " id="intro">
      <div className="w-1/2 h-1/2">
        <Image
          src={profileLogo} // Replace with the URL of your image
          alt="Your Image"
          className="w-4/5 h-auto rounded-full transition-transform duration-500 transform hover:scale-105"
        />
      </div>
      <div className="w-1/2 p-8 transition-transform duration-500 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          Hello! I am [Name] . Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
        <p>
          I have expertise in [Your Skills]. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        {/* Add more information about yourself */}
      </div>
    </div>
  );
}

export default Intro
import React from "react";
import config from "../index.json";
import Image from "next/image";
import profileImage from "../../public/profile.png";

const About = () => {
  const about = config.about;
  return (
    <div id="About" className="px-8 md:px-32 py-16 bg-gray-100">
      <h1 className="uppercase font-bold text-center text-4xl text-gray-800 mb-12">{about.title}</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-80 bg-gray-200 rounded-full shadow-lg mb-8 md:mb-0">
          <Image 
            src={profileImage}
            alt="about" 
            className="rounded-full"
            layout="responsive" 
            width={300} 
            height={300}
          />
        </div>
        <div className="md:ml-16 text-gray-800">
          <p className="text-lg mb-4">{about.primary}</p>
          <p className="mb-6">{about.secondary}</p>
          <a href="https://www.cakeresume.com/me/asd0935252359" className="inline-block bg-gray-800 text-white py-2 px-4 rounded font-bold hover:bg-gray-700">View Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;

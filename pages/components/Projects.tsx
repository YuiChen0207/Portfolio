import React from "react";
import config from "../index.json";
import Image from "next/image";
import simpleTwitterImage from "../../public/simple-twitter.png";
import crwnClothingImage from "../../public/crwn-clothing.png";
import starGuideImage from "../../public/STAR-GUIDE.png";

const Projects = () => {
  const projects = config.projects;
  return (
    <div id={projects.title} className="px-8 md:px-16 md:px-32 pb-16 bg-gray-100">
      <h1 className="pt-12 uppercase font-bold text-center text-gray-800 text-bold text-4xl">
        {projects.title}
      </h1>
      <div className="projects__menu">
        <ul>
          {projects.projects.map((item) => (
            <>
              <li
                key={item.title}
                className="flex flex-col lg:flex-row mt-12 border rounded-lg shadow-lg items-center"
              >
                <div className="lg:w-1/3 p-4">
                  <h2 className="text-2xl text-red-500 font-bold mb-2">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-lg font-medium">{item.description}</p>
                  <div className="flex mt-4 items-center">
                    <div className="text-md text-center font-semibold p-2 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:opacity-80">
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <span className="block py-1 px-2 text-white bg-clip-text text-transparent">
                          See Project
                        </span>
                      </a>
                    </div>
                    <div className="ml-2 font-semibold hover:opacity-80">
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <span className="block py-1 px-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent rounded-lg">
                          Source Code
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:ml-12">
                  {item.image === "simple-twitter.png" && (
                    <Image
                      src={simpleTwitterImage}
                      alt="project image"
                      className="mt-6 md:mt-12 lg:mt-0 w-full rounded-lg"
                      width={700}
                      height={350}
                    />
                  )}
                  {item.image === "CRWN-clothing.png" && (
                    <Image
                      src={crwnClothingImage}
                      alt="project image"
                      className="mt-6 md:mt-12 lg:mt-0 w-full rounded-lg"
                      width={700}
                      height={350}
                    />
                  )}
                  {item.image === "STAR-GUIDE.png" && (
                    <Image
                      src={starGuideImage}
                      alt="project image"
                      className="mt-6 md:mt-12 lg:mt-0 w-full rounded-lg"
                      width={700}
                      height={350}
                    />
                  )}
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;

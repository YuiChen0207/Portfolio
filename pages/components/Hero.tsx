import React from "react";
import config from "../index.json";
import { colors } from "@mui/material";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-gradient-to-b from-purple-500 to-indigo-500">
      <div className="container mx-auto px-8 lg:px-32 flex flex-col justify-center h-full">
        <h1 className="text-6xl font-bold text-white tracking-wide mb-8">
          Hi, my name is{" "}
          <span className="bg-clip-text text-red-500">
            {hero.name}
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white tracking-wide mb-8">
          {hero.subtitle}
        </h2>
        <a
          href="#About"
          className="text-2xl font-bold text-white py-2 px-8 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:opacity-80"
        >
          Know more
        </a>
      </div>
    </section>
  );
};

export default Hero;

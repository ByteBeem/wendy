import React from "react";
import Type from "./Type";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          
        </div>
        <div className="flex flex-col justify-center h-full">
          
          <div className="text-container min-h-[150px]">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Hi, I'm Wendy
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              <Type />
            </h2>
          </div>
          
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and designing software.
            I love to work on web applications using technologies like
            React, Tailwind, Next.js, and GraphQL.
          </p>

         
        </div>
        <div className="big-screen">
         
        </div>
      </div>
    </div>
  );
};

export default Home;

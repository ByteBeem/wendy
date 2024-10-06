import React from "react";
import HeroImage from "../assets/IMG-20240904-WA0048.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
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
          {/* Wrap the text inside a div with fixed min-height */}
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

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Explore Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

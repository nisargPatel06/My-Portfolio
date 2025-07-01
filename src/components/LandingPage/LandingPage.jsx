import React from "react";
import { LuMail, LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

import "./LandingPage.css";
import AnimatedContent from "../ui/AnimatedContent/AnimatedContent";
import FadeContent from "../ui/FadeContent/FadeContent";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="font-Nunito min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <AnimatedContent>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-transparent font-Outfit font-medium tracking-wid bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 animate-gradient-x">
                Nisarg Patel
              </span>
            </h1>
          </AnimatedContent>
          <FadeContent>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Aspiring Full-Stack Developer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I craft scalable, responsive web applications with a focus on
              clean code, intuitive user experiences, and full-stack
              performance.
            </p>
          </FadeContent>
        </div>

        <FadeContent>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:nisargpatel6504@gmail.com"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <LuMail size={20} />
              nisargpatel6504@gmail.com
            </a>
            <a
              target="_blank"
              href="https://github.com/nisargPatel06?tab=repositories"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <LuGithub size={20} />
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nisargpatel06/"
              className="flex gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaLinkedinIn size={20} />
              LinkedIn
            </a>
          </div>

          <button
            //   onClick={() => scrollToSection("about")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View Resume
          </button>
        </FadeContent>
      </div>
    </section>
  );
};

export default LandingPage;

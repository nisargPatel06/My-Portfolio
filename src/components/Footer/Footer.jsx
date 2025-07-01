import React from "react";
import { LuMail, LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-gray-400 mb-6">
          Let's connect and build something amazing together!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:nisargpatel6504@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <LuMail size={24} />
          </a>
          <a
            target="_blank"
            href="https://github.com/nisargPatel06?tab=repositories"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <LuGithub size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nisargpatel06/"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          © 2024 Nisarg Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

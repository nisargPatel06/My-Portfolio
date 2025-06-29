import React, { useEffect, useState } from "react";

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="font-Nunito fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-wide">
            Nisarg Patel
          </div>
          <div className="hidden md:flex space-x-9">
            {["Home", "About", "Skills", "Experience", "Projects"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-lg transition-colors hover:text-blue-400 cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

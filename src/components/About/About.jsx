import { GraduationCap, MapPin } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-8">
      <div className="font-Nunito container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About Me
        </h2>

        <div className="grid gap-8">
          <div className="bg-gray-900/50 border border-gray-700 backdrop-blur-sm rounded-lg">
            <div className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                I am an aspiring software developer with strong front-end and
                back-end skills.I am passionate about creating innovative web
                solutions and always eager to learn new technologies. I have
                hands-on experience with modern web development technologies
                including React, Node.js, MongoDB, and various other tools that
                enable me to build full-stack applications.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-900/50 border border-gray-700 backdrop-blur-sm rounded-lg">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">BS</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Bachelor of Science in IT
                  </h4>
                  <p className="text-blue-400 mb-2">
                    Veer Narmad South Gujarat University (VNSGU)
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

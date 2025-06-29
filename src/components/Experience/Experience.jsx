import React from "react";
import { IoIosCalendar } from "react-icons/io";
import { LuCalendar, LuMapPin } from "react-icons/lu";
import SpotlightCard from "../ui/SpotlightCard/SpotlightCard";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "Oct 2024 - May 2025",
      title: "Software Developer Intern",
      company: "CyberSecurity Umbrella",
      technologies: [
        ".NET core Web API",
        "React.js",
        "SQL Server",
        "Tailwind CSS",
        "Redux",
      ],
      description: [
        "Worked on a live project showcasing a phishing simulation and training portal to enhance user awareness.",
        "Integrated secure email communication features with SMTP server setup and whitelisting mechanisms.",
        "Collaborated with cross-functional teams to refine the system using reference software like Keepnet.",
      ],
    },
  ];
  return (
    <section id="experience" className="font-Nunito py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-Outfit text-4xl text-white text-center mb-16">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-[#0c0f15] shadow-xl z-10"></div>

                {/* Content Card */}
                <div className="ml-20 w-full">
                  <SpotlightCard
                    className="p-6 border bg-gray-900/70 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 rounded-xl"
                    spotlightColor="rgba(255, 255, 255, 0.05)"
                  >
                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-blue-400 mb-3">
                      <LuCalendar size={16} />
                      <span className="text-sm font-Outfit_L font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-Outfit text-white mb-2">
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-purple-400 mb-3">
                      <LuMapPin size={16} />
                      <span className="font-Outfit_L font-medium">
                        {experience.company}
                      </span>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      {/* <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full"> */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <SpotlightCard
                            key={idx}
                            className="text-center cursor-default text-sm font-Outfit_L py-2 px-4 border border-gray-700 text-gray-300 rounded-full"
                          >
                            {tech}
                          </SpotlightCard>
                        ))}
                      </div>
                      {/* </span> */}
                    </div>

                    {/* Description */}
                    <ul className="text-gray-300 space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

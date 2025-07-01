import React from "react";
import SpotlightCard from "../ui/SpotlightCard/SpotlightCard";
import { TbExternalLink } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      title: "WebMart - Ecommerce",
      stack: "MERN Stack",
      description: [
        "Built a responsive and dynamic front-end using React and efficiently managed state with Redux.",
        "Developed secure user authentication and implemented product/order management along with Stripe-based payment processing.",
        "Designed a robust back-end with Node.js & Express, integrating MongoDB for seamless data storage.",
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      stackColor: "text-blue-400",
    },
    {
      title: "MakeYourTrip",
      stack: "Full-stack Development",
      description: [
        "Developed a platform empowering travel agents to create, manage tailored trip packages.",
        "Implemented secure payment integration for seamless transactions.",
        "Enabled users to explore, personalize and book packages with additional features and services.",
      ],
      techStack: ["React.js", ".NET Core", "SQL Server", "Redux"],
      stackColor: "text-purple-400",
    },
    {
      title: "Sundown Studio UI Clone",
      stack: "Frontend Development",
      description: [
        "Built a responsive layout to ensure optimal viewing on various devices.",
        "Applied modern CSS for styling and animations & utilized JavaScript for interactive features, improving user engagement.",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "SwiperJs"],
      stackColor: "text-green-400",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              className="p-6 bg-gray-900/50 border border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group rounded-xl"
              spotlightColor="rgba(255, 255, 255, 0.1)"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <TbExternalLink
                  className="text-gray-400 group-hover:text-blue-400 transition-colors"
                  size={20}
                />
              </div>
              <p className={`${project.stackColor} mb-3`}>{project.stack}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <SpotlightCard
                    key={idx}
                    className="text-center cursor-default text-sm font-Outfit_L py-2 px-4 border border-gray-700 text-gray-300 rounded-full"
                  >
                    {tech}
                  </SpotlightCard>
                ))}
              </div>

              <ul className="text-gray-400 text-sm space-y-2 mb-4">
                {project.description.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

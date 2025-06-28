import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
      skills: ["JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      color: "from-purple-400 to-pink-400",
      skills: ["Node.js", "Express", ".NET Core"],
    },
    {
      title: "Tools",
      color: "from-green-400 to-emerald-400",
      skills: ["Redux Toolkit", "Cloudinary", "Stripe"],
    },
    {
      title: "Database",
      color: "from-orange-400 to-red-400",
      skills: ["MongoDB", "SQL Server", "SQL Server", "SQL Server"],
    },
  ];
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 border border-gray-700 backdrop-blur-sm rounded-xl"
            >
              <h3
                className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="flex">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-center py-2 px-2 border border-gray-600 text-gray-300 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

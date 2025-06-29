import React from "react";
import SpotlightCard from "../ui/SpotlightCard/SpotlightCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Next.js",
      ],
      spotlightColor: "rgba(96, 165, 250, 0.2)",
    },
    {
      title: "Backend",
      color: "from-purple-400 to-pink-400",
      skills: ["Node.js", "Express.js", ".NET Core"],
      spotlightColor: "rgba(196,181,253,0.2)",
    },
    {
      title: "Tools",
      color: "from-green-400 to-emerald-400",
      skills: ["Redux", "Postman", "Git", "Cloudinary", "Stripe"],
      spotlightColor: "rgba(134,239,172,0.2)",
    },
    {
      title: "Database",
      color: "from-orange-400 to-red-400",
      skills: ["MongoDB", "SQL Server", "Oracle", "PostgreSQL"],
      spotlightColor: "rgba(253,186,116,0.2)",
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gray-900/30">
      <div className="font-Nunito container mx-auto">
        <h2 className="text-4xl font-Outfit text-white text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SpotlightCard
              key={index}
              className="h-auto bg-gray-900/50 border border-gray-700 backdrop-blur-sm rounded-xl"
              spotlightColor={category.spotlightColor}
            >
              <h3
                className={`text-2xl font-Outfit mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SpotlightCard
                    key={skillIndex}
                    className={`text-center font-Outfit_L py-2 px-4 border border-gray-700 text-gray-300 cursor-default rounded-full`}
                    spotlightColor="rgba(255, 255, 255, 0.1)"
                  >
                    {skill}
                  </SpotlightCard>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

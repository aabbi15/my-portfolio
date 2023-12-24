"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import SkillsCard from "./SkillsCard";

const projectsData = [
    {
      id: 1,
      title: "C",
      image: "/images/skills/c.png",
      tag: ["All", "Languages"],
    },
    {
      id: 2,
      title: "Google Cloud",
      image: "/images/skills/cloud.png",
      tag: ["All", "Others"],
    },
    {
      id: 3,
      title: "JavaScript",
      image: "/images/skills/js.png",
      tag: ["All", "Languages"],
    },
    {
      id: 4,
      title: "Python",
      image: "/images/skills/python.png",
      tag: ["All", "Languages"],
    },
    {
      id: 5,
      title: "Open AI",
      image: "/images/skills/openai.png",
      tag: ["All", "Others"],
    },
    {
      id: 6,
      title: "HTML",
      image: "/images/skills/html.png",
      tag: ["All", "Languages"],
    },
    {
      id: 7,
      title: "C++",
      image: "/images/skills/cpp.png",
      tag: ["All", "Languages"],
    },
    {
      id: 8,
      title: "CSS",
      image: "/images/skills/css.png",
      tag: ["All", "Languages"],
    },
    {
      id: 9,
      title: "Docker",
      image: "/images/skills/docker.png",
      tag: ["All", "Others"],
    },
    {
      id: 10,
      title: "Express",
      image: "/images/skills/express.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 11,
      title: "Git",
      image: "/images/skills/git.png",
      tag: ["All", "Others"],
    },
    {
      id: 12,
      title: "Linux",
      image: "/images/skills/linux.png",
      tag: ["All", "Languages"],
    },
    {
      id: 13,
      title: "MongoDB",
      image: "/images/skills/mongodb.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 14,
      title: "Next.js",
      image: "/images/skills/next.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 15,
      title: "Node.js",
      image: "/images/skills/nodejs.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 16,
      title: "Pygame",
      image: "/images/skills/pygame.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 17,
      title: "ReactJS",
      image: "/images/skills/reactjs.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 18,
      title: "Selenium",
      image: "/images/skills/selenium.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 19,
      title: "Beautiful Soup",
      image: "/images/skills/soup.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 20,
      title: "SQL",
      image: "/images/skills/sql.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 21,
      title: "Tailwind CSS",
      image: "/images/skills/tailwind.png",
      tag: ["All", "Libraries"],
    },
    {
      id: 22,
      title: "Vercel",
      image: "/images/skills/vercel.png",
      tag: ["All", "Others"],
    },
  ];
  

const SkillsSection = () => {
  const [tag, setTag] = useState("Languages");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Languages"
          isSelected={tag === "Languages"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Libraries"
          isSelected={tag === "Libraries"}
        />
     
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <SkillsCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;

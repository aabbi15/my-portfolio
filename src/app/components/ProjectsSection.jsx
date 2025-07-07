"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // {
  //   id: 9,
  //   title: "AI Agency Website [PG-AGI]",
  //   description: "It is a website for an AI agency which I worked on during my time as an intern at PG-AGI",
  //   image: "/images/projects/pgagi.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "https://pgagi.in/",
  // },
  // {
  //   id: 1,
  //   title: "Maitri Manthan Portal",
  //   description: "Provides a portal to connect the people who want to enroll in internships",
  //   image: "/images/projects/maitri.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/aabbi15/maitrimanthan",
  //   previewUrl: "https://maitrimanthan.vercel.app/",
  // },
  {
    id: 2,
    title: "CodeAbhi",
    description: "A coding website serves as a LeetCode Substitute",
    image: "/images/projects/codeabhi.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/CodeAbhi-final",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Wellness Nexus",
    description: "Nationwide healthcare management System",
    image: "/images/projects/wellness.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aabbi15/enigma-23",
    previewUrl: "/",
    
  },
  {
    id: 4,
    title: "Sudoku Game",
    description: "A simple sudoku PC app made with pygame",
    image: "/images/projects/sudoku.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/sudoku_pygame",
    previewUrl: "/",
  },

  {
    id: 5,
   
    title: "DAI-IICT Clubs and comittee website",
    description: "Website for list of clubs ",
    image: "/images/projects/clubs.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MSTC-DA-IICT/Hacktoberfest23-ReACTivate",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "A portfolio website made using NextJS",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/my-portfolio",
    previewUrl: "https://abhishek-abbi.vercel.app/",
  },
  {
    id: 7,
    title: "Stock Data Scraper",
    description: "Scrapes data of Top indian stocks using python libraries like BeautifulSoup and Selenium",
    image: "/images/projects/stock.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/stock_scraping",
    previewUrl: "/",
  },

  {
    id: 10,
    title: "Commenwealth Games Database Management System",
    description: "Designed schemas, tables and queries for a database management system for commonwealth games",
    image: "/images/projects/commonwealth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/Commenwealth-Database",
    previewUrl: "/",
  }, {
    id: 11,
    title: "Salon Website - Alisha Beauty Parlor",
    description: "A full stack website for one of my clients with integrated WhatsApp API",
    image: "/images/projects/salon.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/parlor",
    previewUrl: "/",
  }, 
  {
    id: 12,
    title: "Convolution State Diagram Generator",
    description: "A website which generates the convolution state diagram of a given inputs",
    image: "/images/projects/trellis.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/trellis",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "ATM and Bank Management System",
    description: "A C++ projects using OOP concepts",
    image: "/images/projects/atmbank.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anjalichandwani04/Bank_Management_System",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
    
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

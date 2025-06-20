"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceData = [
  {
    id: 1,
    title: "PG-AGI (Playing God with Artificial General Intelligence)",
    description: "Developed a responsive landing page for an AI Solutions Agency using NextJS, MongoDB, and TailwindCSS, integrating Calendly API for seamless client scheduling, boosting online presence and conversions.",
    image: "/images/projects/pgagi.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://pgagi.in/",
  },
  {
    id: 2,
    title: "Maitri Manthan Organization",
    description: "Built a feature-rich software for remote internships, enhanced homepage engagement, led team coordination, and supported Udaipur outreach for a freelance project.",
    image: "/images/projects/maitri.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aabbi15/maitrimanthan",
    previewUrl: "https://maitrimanthan.vercel.app/",
  },
  {
    id: 3,
    title: "Suryosa",
    description: "Developing a full-stack web app for Suryosa as a freelance developer, leveraging modern web technologies to deliver a robust and scalable solution.",
    image: "/images/projects/suryosa.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://suryosa.vercel.app/",
  },
  {
    id: 4,
    title: "Expo Essentials",
    description: "Developing a full-stack web app for Suryosa as a freelance  contract-based developer, leveraging modern web technologies to deliver a robust and scalable solution.",
    image: "/images/projects/expo.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.expoessentials.in/",
    
  },
  {
    id: 4,
    title: "MarkIt Solutions - DAU Admissions",
    description: "Developed a full-stack web application for Dhirubhai Ambani University admissions at Markit Solutions, managing over 14,000 applications.",
    image: "/images/projects/dau.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://admission.daiict.ac.in/",
  },

   {
    id: 5,
    title: "Salon Website ",
    description: "I made a full stack website working as a contractor for a local salon with integrated WhatsApp API",
    image: "/images/projects/salon.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://alishabeautyparlor.vercel.app/",
  }, 

//   {
//     id: 5,
   
//     title: "DAI-IICT Clubs and comittee website",
//     description: "Website for list of clubs ",
//     image: "/images/projects/clubs.jpg",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/MSTC-DA-IICT/Hacktoberfest23-ReACTivate",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "React Portfolio Website",
//     description: "A portfolio website made using NextJS",
//     image: "/images/projects/Portfolio.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/aabbi15/my-portfolio",
//     previewUrl: "https://abhishek-abbi.vercel.app/",
//   },
//   {
//     id: 7,
//     title: "Stock Data Scraper",
//     description: "Scrapes data of Top indian stocks using python libraries like BeautifulSoup and Selenium",
//     image: "/images/projects/stock.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/aabbi15/stock_scraping",
//     previewUrl: "/",
//   },

//   {
//     id: 10,
//     title: "Commenwealth Games Database Management System",
//     description: "Designed schemas, tables and queries for a database management system for commonwealth games",
//     image: "/images/projects/commonwealth.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/aabbi15/Commenwealth-Database",
//     previewUrl: "/",
//   }, {
//     id: 11,
//     title: "Salon Website - Alisha Beauty Parlor",
//     description: "A full stack website for one of my clients with integrated WhatsApp API",
//     image: "/images/projects/salon.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/aabbi15/parlor",
//     previewUrl: "/",
//   }, 
//   {
//     id: 12,
//     title: "Convolution State Diagram Generator",
//     description: "A website which generates the convolution state diagram of a given inputs",
//     image: "/images/projects/trellis.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/aabbi15/trellis",
//     previewUrl: "/",
//   },
//   {
//     id: 13,
//     title: "ATM and Bank Management System",
//     description: "A C++ projects using OOP concepts",
//     image: "/images/projects/atmbank.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/anjalichandwani04/Bank_Management_System",
//     previewUrl: "/",
//   },
];

const ExperienceSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ExperienceData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experience
      </h2>
    
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ExperienceCard
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

export default ExperienceSection;

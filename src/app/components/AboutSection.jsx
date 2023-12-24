"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";




function AboutSection(){
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="about" src="/images/about.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate  web developer
          specializing in the MERN(MongoDB,Express,ReactJS,NodeJS) stack.
          My proficiency extends to both NoSQL as well as SQL databases.
          Additionally, my creative edge shines through Python, where I&apos;ve crafted innovative applications
          and contributed to open source projects, successfully completing the Hacktoberfest 2023.
          With expertise in web scraping using Beautiful Soup and Selenium,
          I bring a versatile skill set to every project.I am focused on delivering efficient solutions 
          that seamlessly blend functionality and aesthetics.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

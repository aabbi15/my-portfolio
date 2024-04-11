"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";




function AboutSection(){
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="about" src="/images/about.png" width={500} height={500} className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate Web Developer with a strong foundation in ReactJS, NodeJS, NextJS, Express, and NodeJS. Using these I have created a lot of website for my clients as well as during my interships.
          <br/>
          My expertise extends to both NoSQL and SQL databases (MongoDB and PostgreSQL), ensuring a versatile approach to data management and analysis.
          
          <br/>

          In addition, my creativity flourishes in Python, where I have developed dekstop applications and web scraping scripts which make the use of Beautiful Soup and Selenium.
          <br/>

          I am an active contributed to open-source projects, culminating in the successful completion of Hacktoberfest 2023.

          <br/>

          I bring a comprehensive skill set to each project. My focus is on delivering efficient solutions that perfectly balance functionality with aesthetics, ensuring a seamless user experience.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

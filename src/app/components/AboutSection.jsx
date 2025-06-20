"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";




function AboutSection(){
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-16 xl:px-8">
        <div className="flex flex-col gap-5">

        <Image alt="about" src="/images/gdg team.jpeg" width={500} height={400} className="rounded-lg" />
        <Image alt="about" src="/images/devolution.jpeg" width={500} height={400} className="rounded-lg" />

        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm lg:text-base">
        <p>I&apos;m a <strong>Web Developer</strong> with expertise in <strong>ReactJS</strong>, <strong>NextJS</strong>, <strong>NodeJS</strong>, and <strong>Express</strong>, having built dynamic, responsive websites for clients and during internships, including a full-stack admissions platform managing over <strong>14,000 applications</strong>.
        <br/> <br/>
         My proficiency in <strong>MongoDB</strong> (using Community Server, Compass, and Atlas) and <strong>PostgreSQL</strong> enables versatile data management, from local testing to scalable cloud solutions.</p>
<br/> <br/>

  <p>Beyond web development, I leverage <strong>Python</strong> to create desktop applications and web scraping scripts using <strong>Beautiful Soup</strong> and <strong>Selenium</strong>, delivering efficient, tailored solutions.</p>
  <br/> <br/>
  <p>As the convener of the <strong>Google Developer Groups (GDG)</strong> at DAIICT, I organized the institute’s first-ever tech conference, bringing together over <strong>500 students</strong> to foster innovation and collaboration. I also serve on the <strong>Student Placement Cell</strong>, overseeing placements for over <strong>2,000 students</strong>, honing my leadership and coordination skills.</p>
  <br/> <br/>
  <p>My focus is on crafting seamless, <strong>user-centric solutions</strong> that balance functionality and aesthetics, ensuring impactful results for every project.</p>
     </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

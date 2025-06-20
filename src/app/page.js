'use client'

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import { useEffect, useState } from "react";
import ExperienceSection from "./components/ExperienceSection";
import PositionsOfResponsibilitySection from "./components/POR";

export default function Home() {
  const [load,Setload] = useState(true);
  setTimeout(() => {
    Setload(false);
  },945)
  if(load){
  return (
    <div className="dashboard body2 bg-[#121212]">
  <svg className="svg2">
    <circle className="bg" cx="57" cy="57" r="52" />
    <circle className="meter-1" cx="57" cy="57" r="52" />
  </svg>
 
</div>

  );
  
  }

  else{
    return(
      <main className="flex min-h-screen flex-col bg-[#121212]">
      
      <Navbar />
     <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
       <AboutSection />
       <ExperienceSection/>
      <SkillsSection/>

     <ProjectsSection />
       <CertificationsSection />
       {/* <AchievementsSection/> */}
       <PositionsOfResponsibilitySection/>
       <EmailSection />
    </div>
     <Footer /> 
     </main>
    )
  }

 


}

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";



const CertificationsSection = () => {
  const [isPending, startTransition] = useTransition();


  

  return (
    <section className="text-white" id="certifications">
      <div className="  items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>

          <div className="mt-8">
            <ul className="text-md list-disc text-[#ADB7BE] pl-2">


              <li className="mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Web Scraping</span><br/>
                Using Python to Access Web Data - Coursera
                <br />
                Credential ID K96LBP4K26FU
              </li>
              

              <li className="mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Cloud Computing</span><br/>
              <li className="mb-2">
                Google Cloud Computing Foundations: Cloud Computing Fundamentals - Google
                <br />
                Credential ID 5841544
                </li>
              </li>


              <li className="mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Generative AI</span><br/>
              <li className="mb-1">
                Introduction to Generative AI - Google
                <br />
                Credential ID 5864115
              </li>
              <li className="mb-1">
                Level 3 GenAI: Prompt Engineering - Google
                <br />
                Credential ID 5864073
                </li>
                <li className="mb-1">
                What Is Generative AI? - LinkedIn
              </li>
              <li className="mb-1">
                Generative AI: The Evolution of Thoughtful Online Search - LinkedIn
              </li>
              </li>
              
              
              <li className="mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">B.Tech in ICT</span><br/>
                Currently pursuing undergrad in ICT (Information and Communication Technology) at DA-IICT Gandhinagar.
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

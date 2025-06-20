"use client";
import React, { useTransition, useState } from "react";

const PositionsOfResponsibilitySection = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <section className="text-white" id="positions-of-responsibility">
      <div className="items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Positions of Responsibility</h2>

          <div className="mt-8">
            <ul className="text-md list-disc text-[#ADB7BE] pl-2">
              <li className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Convener, Google Developer Groups (GDG), DAIICT</span><br />
                Organized DAIICT&apos;s first-ever tech conference, leading a team to host over 500 students, fostering innovation and collaboration through workshops and tech talks.
              </li>
              <li className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Core Member, Student Placement Cell, DAIICT</span><br />
                Coordinated placement processes for over 2,000 students, facilitating communication between recruiters, students, and faculty to ensure efficient and successful placements.
              </li>
              <li className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Member, Debate Club, DAIICT</span><br />
                Led the organization of a large-scale Model United Nations (MUN) event with over 250 participants, enhancing student engagement and leadership skills.
              </li>
              <li className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Core Member, Press Club, DAIICT</span><br />
                Co-founded the first college newsletter as a core team member, creating impactful content that enriched student life and campus communication.
              </li>
              <li className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl font-bold">Co-Lead, Freshers Committee, DAIICT</span><br />
                Led the planning and execution of the freshers’ event, managing all logistics to create a memorable experience for over 1000 students.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionsOfResponsibilitySection;
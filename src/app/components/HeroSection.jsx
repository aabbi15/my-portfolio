"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[80px] lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="lg:min-h-[250px] lg:mt-0 inline-block mt-2 min-h-[100px] "  >
            <TypeAnimation
              sequence={[
                "Abhishek\nAbbi",
                1000,
                "A Full-stack\nDeveloper",
                1000,
                "A Backend\nEngineer",
                1000,
                // "API ",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="whitespace-pre-line" 
            />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I translate ideas into functional and elegant code 
          <br/>
          solutions in the digital realm. And I love it!         </p>
          <div>
            <Link
            // target="_blank"
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
            <Link
            target="_blank"
              href="/Abhishek_Abbi_resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:-mt-10"
        >
          <div className="rounded-full bg-[#181818]  w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/images/me.jpg"
              alt="hero image"
              className="rounded-full "
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

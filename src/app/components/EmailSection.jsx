"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Twittericon from "../../../public/twitter.png";
import Link from "next/link";
import Image from "next/image";
import axios  from "axios";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [user,Setuser] = useState({
    email:"",
    subject: "",
    msg:"",
  });

  console.log(user);

  const handleSubmit = async () => {
   
    const JSONuser = JSON.stringify(user);
    console.log(user);
    console.log(JSONuser);
    // const endpoint = "/api/send";

  

    const response = await axios.post("/api/send", JSONuser);
    const resData = await response.msg;
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/aabbi15">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/abhishek-abbi-b6280a278/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://twitter.com/AbhishekAb70528">
            <Image src={Twittericon} alt="X Icon" width={42} height={42} />
          </Link>
        </div>
        <br></br>
        You can also directly Email me at : abhishekabbi.work@gmail.com
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-md mt-10 ml-10">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={user.email} onChange={(e)=>Setuser((prev)=>({...prev,email:e.target.value}))}

                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={user.subject} onChange={(e)=>Setuser((prev)=>({...prev,subject:e.target.value}))}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={user.msg} onChange={(e)=>Setuser((prev)=>({...prev,msg:e.target.value}))}

                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="I have a project for you..."
              />
            </div>
            <button
              type="button" onClick={handleSubmit}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

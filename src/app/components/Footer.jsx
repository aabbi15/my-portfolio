import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image
          src="/images/mylogo.png"
              alt="hero image"
              // className="absolute transform -translate-x-1/2' -translate-y-1/4 top-1/4 left-1/2 w-[300px] h-[300px]"
              height={70}
              width={70}
          ></Image>
          <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

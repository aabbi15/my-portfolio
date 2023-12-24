import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SkillsCard = ({ imgUrl, title,}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-14 w-14 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain"  }}
      >
        
      </div>
      <div className="text-white rounded-xl mt-1 bg-[#181818] py-1 px-2 text-center">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        {/* <p className="text-[#ADB7BE]">{description}</p> */}
      </div>
    </div>
  );
};

export default SkillsCard;

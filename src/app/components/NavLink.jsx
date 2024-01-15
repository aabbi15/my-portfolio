import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';


const NavLink = ({ href, title }) => {
  return (
    // <Link
    //   href={href}
    //   className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    // >
    //   {title}
    // </Link>

    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      offset={-120}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;

import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";

function MobileNav(props) {
  const navOpenStyle = props.nav ? "traslate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`transform transition-all duration-200 ${navOpenStyle} fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-purple-700`}>
      <MdClose
        onClick={props.closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[220] right-[2rem]"
      />
      <ul className="relative z-[201] space-y-8 justify-center h-[100%] flex flex-col items-center">
        <li className="text-[20px] cursor-pointer text-white hover:text-yellow-400">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[20px] cursor-pointer text-white hover:text-yellow-400">
          <Link href="/">About us</Link>
        </li>
        <li className="text-[20px] cursor-pointer text-white hover:text-yellow-400">
          <Link href="/">Events</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;

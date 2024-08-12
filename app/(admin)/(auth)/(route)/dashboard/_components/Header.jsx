"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import defaultPicture from "@/app/assets/images/teachers/default.jpg";
import { ModeToggle } from "@/components/theme-switcher";

function Header() {
  const authData = useSelector((state) => state.auth);
  
  return (
    <div className="p-3.5 shadow-sm border flex justify-between">
      <div></div>
      <div className="flex items-center gap-5">
        <div className="cursor-pointer">
          <ModeToggle />
        </div>
        <Image
          src={
            authData?.user?.profilePhoto ? user?.profilePhoto : defaultPicture
          }
          alt="user"
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;

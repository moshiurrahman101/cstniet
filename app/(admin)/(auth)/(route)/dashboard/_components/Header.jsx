"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import defaultPicture from "@/app/assets/images/teachers/default.jpg";

function Header() {
  const authData = useSelector((state) => state.auth);

  return (
    <div className="p-4 shadow-sm border flex justify-between">
        <div>

        </div>
      <div>
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

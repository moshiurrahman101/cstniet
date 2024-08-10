"use client";
import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/logo.png";
import {
  BookIcon,
  GraduationCap,
  HandIcon,
  LayoutIcon,
  Settings,
  UserCheck,
} from "lucide-react";
import { useSelector } from "react-redux";
import defaultPicture from "@/app/assets/images/teachers/default.jpg";

function DashboardSidebar() {
  const authData = useSelector((state) => state.auth);
  const menuItems = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: LayoutIcon },
    {
      id: 2,
      name: "Students",
      path: "/dashboard/students",
      icon: GraduationCap,
    },
    { id: 3, name: "Teachers", path: "/dashboard/teachers", icon: UserCheck },
    {
      id: 4,
      name: "Attendance",
      path: "/dashboard/attendance",
      icon: HandIcon,
    },
    { id: 5, name: "Result", path: "/dashboard/result", icon: BookIcon },
    { id: 6, name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];
  return (
    <div className="h-screen border shadow-md">
      <div className="flex justify-center">
        <Image src={logo} width={55} height={55} alt="logo" />
      </div>
      <hr className="my-3" />
      <div>
        {menuItems.map((menu, index) => (
          <h2
            key={index}
            className="flex items-center text-md gap-3 p-4 text-slate-500 hover:bg-purple-700 hover:text-white cursor-pointer rounded-lg"
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="flex gap-2 items-center bottom-5 fixed p-4">
        <Image
          src={
            authData?.user?.profilePhoto ? user?.profilePhoto : defaultPicture
          }
          alt="user"
          width={35}
          height={35}
          className="rounded-full"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-800">{authData?.user?.displayName}</h4>
          <h4 className="text-xs text-slate-400">{authData?.user?.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;

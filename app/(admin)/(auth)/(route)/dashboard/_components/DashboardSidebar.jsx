"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/images/logo.png";
import {
  BookIcon,
  GraduationCap,
  HandIcon,
  LayoutIcon,
  LogOutIcon,
  Settings,
  UserCheck,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useDispatch, useSelector } from "react-redux";
import defaultPicture from "@/app/assets/images/teachers/default.jpg";
import Link from "next/link";
import { logout } from "@/data/slices/authSlices";
import { usePathname, useRouter } from "next/navigation";

function DashboardSidebar() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
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
    {
      id: 5,
      name: "Result",
      path: "/dashboard/result",
      icon: BookIcon,
    },
    {
      id: 6,
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];
  const LogoutHandle = () => {
    setIsLoggingOut(true);
    dispatch(logout);
    localStorage.removeItem("authUser");
    router.push("/login");
  };

  if (isLoggingOut) {
    return <div className="h-screen w-screen bg-purple-700 flex justify-center items-center">
      <div className="text-lg text-white font-bold">
      Logging out...
      </div>
    </div>; 
  }
  const path = usePathname();
  return (
    <div className="h-screen border shadow-md">
      <div className="flex justify-center">
        <Image src={logo} width={55} height={55} alt="logo" />
      </div>
      <hr className="my-3" />
      <div>
        {menuItems.map((menu, index) => (
          <Link href={menu.path}>
            <h2
              key={index}
              className={`flex items-center text-md gap-3 mt-1 p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg ${path==menu.path&&'bg-primary text-white'}`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
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
          <h4 className="text-sm font-bold text-slate-800">
            {authData?.user?.displayName}
          </h4>
          <h4 className="text-xs text-slate-400">{authData?.user?.email}</h4>
        </div>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <h2 className="flex items-center text-md gap-3 p-4 text-slate-500 hover:bg-red-700 hover:text-white cursor-pointer rounded-lg">
              <LogOutIcon />
              {"Logout"}
            </h2>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure to logout?</AlertDialogTitle>
              <AlertDialogDescription>
                This action ougout your account. If you won't be logout right
                now, click cancle button. Otherwise go continue
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={LogoutHandle}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default DashboardSidebar;

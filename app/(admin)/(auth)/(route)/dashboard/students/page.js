"use client";

import { Button } from "@/components/ui/button";
import { setAuth } from "@/data/slices/authSlices";
import { firestore } from "@/firebase/firebase";
import getStudents from "@/firebase/getstudents";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Students() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      dispatch(setAuth(JSON.parse(savedUser)));
    }
    setLoading(false); // Set loading to false after fetching user data
  }, [dispatch]);

  const storeAuth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && storeAuth.isAuthenticated === false) {
      router.push("/login");
    }
  }, [loading, storeAuth.isAuthenticated, router]);

  // getting student 
  
  
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[250px] p-5 rounded-md bg-purple-600">Loading...</div>
      </div>
    ); // Render loading indicator while fetching data
  }

  return (
    <div className="flex justify-between items-center p-7">
      <h2 className="text-2xl font-bold">Students</h2>
      <Button>
        <Link href={'/dashboard/students/add'}>+ Add New Student</Link>
      </Button>
    </div>
  );
}

export default Students;

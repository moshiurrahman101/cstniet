"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAuth } from "@/data/slices/authSlices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AddStudentForm from "../_components/AddStudentForm";

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

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[250px] p-5 rounded-md bg-purple-600">Loading...</div>
      </div>
    ); // Render loading indicator while fetching data
  }

 
  

  return (
    <div>
      <div className="flex justify-between items-center p-7">
        <h2 className="text-2xl font-bold">Add New Students</h2>
        <Button variant="secondary">
          <Link href={"/dashboard/students/"}>Back</Link>
        </Button>
      </div>
      <AddStudentForm />
    </div>
  );
}

export default Students;

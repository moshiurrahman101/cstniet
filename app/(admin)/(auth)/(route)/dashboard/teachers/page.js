"use client";

import { Button } from "@/components/ui/button";
import { setAuth } from "@/data/slices/authSlices";
import { firestore } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeachersListTable from "./_components/TeachersListTable";


async function getStudentData() {
    try {
        const querySnapshot = await getDocs(collection(firestore, "students"));
        const data = [];

        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() }); // Use doc.data() as a function
        });

        return data;
    } catch (error) {
        console.error("Error fetching student data:", error.message);
        console.error("Stack Trace:", error.stack);
    }
}

function Students() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Loading state
  const [studentsData, setStudentsData] = useState([]); // Loading state
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const router = useRouter();

  // refresh trigger
  const dataRefreshTrigger = () => {
    setRefreshTrigger(true)
  }
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
  useEffect(()=> {
    async function fetchData() {
      const data = await getStudentData();
      setStudentsData(data);
    }
    fetchData();
  },[])
  useEffect(()=> {
    if (refreshTrigger) {
      async function fetchData() {
        const data = await getStudentData();
        setStudentsData(data);
      }
      fetchData();
    }
  },[refreshTrigger])
  
  
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[250px] p-5 rounded-md bg-purple-600">Loading...</div>
      </div>
    ); // Render loading indicator while fetching data
  }

  return (
    <div>
      <div className="flex justify-between items-center px-7 py-2">
        <h2 className="text-2xl font-bold">Teachers</h2>
        <Button>
          <Link href={'/dashboard/teachers/add'}>+ Add New Teachers</Link>
        </Button>
      </div>
      <TeachersListTable studentList={studentsData} refreshData={dataRefreshTrigger}/>
    </div>
  );
}

export default Students;

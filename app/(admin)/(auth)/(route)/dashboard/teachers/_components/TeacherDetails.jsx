"use client";
import defaultProfilePic from "@/firebase/defaultResource";
import { firestore as db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

function TeacherDetails({ id }) {
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        if (id) {
          // Reference to the specific document
          const docRef = doc(db, "teachers", id);

          // Fetch the document
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Document found, set the student data
            setTeacherData(docSnap.data());
          } else {
            // Document does not exist
            setError("No teacher found with the provided ID.");
          }
        }
      } catch (err) {
        console.error("Error fetching teacher data:", err);
        setError("Failed to fetch teacher data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!teacherData) {
    return <div>No teacher data available.</div>;
  }

  return (
    <div className="p-7">
      <div className="">
        <Image className="rounded-md" src={defaultProfilePic} alt="profile pic" width={80} height={80}/>
      </div>
      <div className="">
        <div className="">
          <h1 className="text-xl">Personal Information:</h1>
          <h2 className="text-md font-medium py-1">
            <b>Teacher name:</b> {teacherData.teacherName}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Teacher Phone:</b> {teacherData.teacherPhone}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Department:</b> {teacherData.department}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Designation:</b> {teacherData.designation}
          </h2>
          
        </div>
      </div>
    </div>
  );
}

export default TeacherDetails;

"use client";
import defaultProfilePic from "@/firebase/defaultResource";
import { firestore as db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

function StudentDetails({ id }) {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        if (id) {
          // Reference to the specific document
          const docRef = doc(db, "students", id);

          // Fetch the document
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Document found, set the student data
            setStudentData(docSnap.data());
          } else {
            // Document does not exist
            setError("No student found with the provided ID.");
          }
        }
      } catch (err) {
        console.error("Error fetching student data:", err);
        setError("Failed to fetch student data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!studentData) {
    return <div>No student data available.</div>;
  }

  return (
    <div className="p-7">
      <div className="flex justify-center">
        <Image className="rounded-md" src={defaultProfilePic} alt="profile pic" width={80} height={80}/>
      </div>
      <div className="">
        <div className="">
          <h1 className="text-xl">Personal Information:</h1>
          <h2 className="text-md font-medium py-1">
            <b>Student name:</b> {studentData.studentName}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Student Phone:</b> {studentData.studentPhone}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Guardian Phone:</b> {studentData.guardianPhone}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Address:</b> {studentData.address}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Blod Group</b> {studentData.bloodGroup}
          </h2>
        </div>
        <div className="mt-5">
          <h1 className="text-xl">Academic Information:</h1>
          <h2 className="text-md font-medium py-1">
            <b>Student Id: </b> {studentData.studentId}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Institute: </b> {studentData.institute}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Board Roll: </b> {studentData.roll}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Registration no: </b> {studentData.registrationNumber}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Session</b> {studentData.session}
          </h2>
          <h2 className="text-md font-medium py-1">
            <b>Semester: </b> {studentData.semester}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;

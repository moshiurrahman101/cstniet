"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { firestore as db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function EditTeacherForm({ id }) {
  const [teacherData, setTeacherData] = useState([]); // Loading state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState({});

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (id) {
      const fetchTeacherData = async () => {
        try {
          const docRef = doc(db, "teachers", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setTeacherData(data);
            // Reset the form with the fetched data
            reset({
              teacherName: data.teacherName || "",
              teacherPhone: data.teacherPhone || "",
              department: data.department || "",
              designation: data.designation || "",
            });
          } else {
            setError("No teacher found with the provided ID.");
          }
        } catch (err) {
          console.error("Error fetching teacher data:", err);
          setError("Failed to fetch teacher data.");
        } finally {
          setLoading(false);
        }
      };

      fetchTeacherData();
    }
  }, [id, reset]);

  const TeacherUpdateFormHandle = async (formData) => {
    try {
      const docRef = doc(db, "teachers", id); // Reference to the document to update

      await updateDoc(docRef, {
        teacherName: formData.teacherName,
        teacherPhone: formData.teacherPhone,
        department: formData.department,
        designation: formData.designation,
      });

      setMessage({
        type: "success",
        data: "Teacher updated succesfully!",
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!teacherData) {
    return <div>No data available.</div>;
  }

  return (
    <div className="px-7 py-2">
      {message?.type == "success" && (
        <p className=" mb-3 rounded-full w-[350px] text-sm font-bold py-2 px-4 bg-green-300 text-green-600">
          {message.data}
        </p>
      )}
      <form action={handleSubmit(TeacherUpdateFormHandle)}>
        <div className="flex gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="teacherName">Teacher name</Label>
            <Input
              // value={studentData.studentName}
              name="studentName"
              {...register("teacherName", { required: true })}
              type="text"
              placeholder="Teacher name"
            />
            <Label htmlFor="teacherPhone">Teacher phone</Label>
            <Input
              {...register("teacherPhone")}
              type="text"
              placeholder="Teacher phone"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="teacherName">Department</Label>
            <Input
              // value={studentData.studentName}
              name="department"
              {...register("department", { required: true })}
              type="text"
              placeholder="Department"
            />
            <Label htmlFor="designation">Designation</Label>
            <Input
              {...register("designation")}
              type="text"
              placeholder="Ex (jr. Instructor)"
            />
          </div>
        </div>
        <Button className="mt-5">Update & Save</Button>
      </form>
    </div>
  );
}

export default EditTeacherForm;

"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { firestore } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddTeacherForm() {
     // Student add part
  const [message, setMessage] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const StudentEntryFormHandle = async (formData) => {

    try {
        const docRef = await addDoc(collection(firestore, "teachers"), {
            teacherName: formData.teacherName,
            teacherPhone: formData.teacherPhone,
            department: formData.department,
            designation: formData.designation,

        })
        
        if (addDoc) {
            
            setMessage({
              type:"success",
              data: "Teacher added succesfully!"
            });
            resetField("teacherName");
            resetField("teacherPhone");
            resetField("department");
            resetField("designation");
          
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
  }
  return (
    <div className="px-7 py-2">
        {message?.type == "success" && (
          <p className=" mb-3 rounded-full w-[350px] text-sm font-bold py-2 px-4 bg-green-300 text-green-600">
            {message.data}
          </p>
        )}
        <form action={handleSubmit(StudentEntryFormHandle)}>
          <div className="flex gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="teacherName">Teacher name</Label>
              <Input {...register("teacherName", {required: true})} type="text" placeholder="Ex. (Mr. Jhon)" />
              <Label htmlFor="teacherPhone">Phone Number</Label>
              <Input {...register("teacherPhone", {required: true})} type="text" placeholder="Ex. (01xxxxxx)" />
                       
              
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="department">Department</Label>
              <Input {...register("department", {required: true})} type="text" placeholder="Student Identification no" />
              <Label htmlFor="designation">Designation</Label>
              <Input {...register("designation", {required: true})} type="text" placeholder="Ex.(Senior Insturctor)" />
            </div>
          </div>
            <Button className="mt-5">Save & Add</Button>
        </form>
      </div>
  )
}

export default AddTeacherForm
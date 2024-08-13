"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { firestore } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddStudentForm() {
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
        const docRef = await addDoc(collection(firestore, "students"), {
            studentName: formData.studentName,
            studentPhone: formData.studentPhone,
            guardianPhone: formData.guardianPhone,
            address: formData.address,
            bloodGroup: formData.bloodGroup,
            studentId: formData.studentId,
            institute: formData.institute,
            studentType: formData.studentType,
            session: formData.session,
            semester: formData.semester,
            roll: formData.roll,
            registrationNumber: formData.registrationNumber,
        })
        
        if (addDoc) {
            
            setMessage({
              type:"success",
              data: "Student added succesfully!"
            });
            resetField("studentName");
            resetField("studentPhone");
            resetField("guardianPhone");
            resetField("address");
            resetField("bloodGroup");
            resetField("studentId");
            resetField("institute");
            resetField("studentType");
            resetField("session");
            resetField("semester");
            resetField("roll");
            resetField("registrationNumber");
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
              <Label htmlFor="studentName">Student name</Label>
              <Input {...register("studentName", {required: true})} type="text" placeholder="Student name" />
              <Label htmlFor="studentPhone">Student phone</Label>
              <Input {...register("studentPhone")} type="text" placeholder="Student phone"/>
              <Label htmlFor="guardianPhone">Guardian phone</Label>
              <Input {...register("guardianPhone")} type="text" placeholder="Student parents phone" />
              <Label htmlFor="address">Address</Label>
              <Input {...register("address")} type="text" placeholder="Present Address" />
              <Label htmlFor="bloodGroup">Blood Group</Label>
              <select {...register("bloodGroup")} className="border p-2 rounded-md">
                <option value={'A+'}>A+</option>
                <option value={'A-'}>A-</option>
                <option value={'B+'}>B+</option>
                <option value={'B-'}>B-</option>
                <option value={'AB+'}>AB+</option>
                <option value={'AB-'}>AB-</option>
                <option value={'O+'}>O+</option>
                <option value={'O-'}>O-</option>
              </select>
              <Label htmlFor="roll">Board Roll</Label>
              <Input {...register("roll")} type="text" placeholder="Board Roll" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="studentId">Student Id.</Label>
              <Input {...register("studentId", {required: true})} type="text" placeholder="Student Identification no" />
              <Label htmlFor="institute">Institute</Label>
              <select {...register("institute",  {required: true})} className="border p-2 rounded-md text-sm text-slate-500">
                <option value={'NIET'}>NIET</option>
                <option value={'WII'}>WII</option>
              </select>
              <Label htmlFor="studentType">Student type</Label>
              <select {...register("studentType",  {required: true})} className="border p-2 rounded-md text-sm text-slate-500">
                <option value={'Regular'}>Regular</option>
                <option value={'Irregular'}>Irregular</option>
              </select>
              <Label htmlFor="session">Session</Label>
              <select {...register("session",  {required: true})} className="border p-2 rounded-md text-sm text-slate-500">
                <option value={'2015-16'}>2015-16</option>
                <option value={'2016-17'}>2016-17</option>
                <option value={'2017-18'}>2017-18</option>
                <option value={'2018-19'}>2018-19</option>
                <option value={'2019-20'}>2019-20</option>
                <option value={'2020-21'}>2020-21</option>
                <option value={'2021-22'}>2021-22</option>
                <option value={'2022-23'}>2022-23</option>
                <option value={'2023-24'}>2023-24</option>
                <option value={'2024-25'}>2024-25</option>
                <option value={'2025-26'}>2025-26</option>
                <option value={'2026-27'}>2026-27</option>
                <option value={'2027-28'}>2027-28</option>
                <option value={'2028-29'}>2028-29</option>
                <option value={'2029-30'}>2029-30</option>
                <option value={'2030-31'}>2030-31</option>
              </select>
              
              <Label htmlFor="semester">Semester</Label>
              <select {...register("semester",  {required: true})} className="border p-2 rounded-md text-sm text-slate-500">
                <option value={'1st'}>1st</option>
                <option value={'2nd'}>2nd</option>
                <option value={'3rd'}>3rd</option>
                <option value={'4th'}>4th</option>
                <option value={'5th'}>5th</option>
                <option value={'6th'}>6th</option>
                <option value={'7th'}>7th</option>
                <option value={'8th'}>8th</option>
              </select>
              <Label htmlFor="registrationNumber">Registration no.</Label>
              <Input {...register("registrationNumber")} type="text" placeholder="Registration Number" />
            </div>
          </div>
            <Button className="mt-5">Save & Add</Button>
        </form>
      </div>
  )
}

export default AddStudentForm
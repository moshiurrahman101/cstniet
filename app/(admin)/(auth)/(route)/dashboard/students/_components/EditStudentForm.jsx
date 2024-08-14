"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { firestore as db } from "@/firebase/firebase";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function EditStudentForm({ id }) {
  const [studentData, setStudentData] = useState([]); // Loading state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchStudentData = async () => {
        try {
          const docRef = doc(db, "students", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setStudentData(docSnap.data());
          } else {
            console.log("No such document!");
            setError("No student found with the provided ID.");
          }
        } catch (err) {
          console.error("Error fetching student data:", err);
          setError("Failed to fetch student data.");
        } finally {
          setLoading(false);
        }
      };

      fetchStudentData();
    }
  }, [id]);

  // Student add part
  const [message, setMessage] = useState({});
  const {
    register,
    handleSubmit,
    resetField,
  } = useForm({defaultValues: {
    studentName: "",
  }});

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
      });

      if (addDoc) {
        setMessage({
          type: "success",
          data: "Student added succesfully!",
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
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!studentData) {
    return <div>No data available.</div>;
  }

  console.log(studentData);

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
            <Input
              // value={studentData.studentName}
              name="studentName"
              {...register("studentName", { required: true })}
              type="text"
              placeholder="Student name"
            />
            <Label htmlFor="studentPhone">Student phone</Label>
            <Input
              {...register("studentPhone")}
              type="text"
              placeholder="Student phone"
            />
            <Label htmlFor="guardianPhone">Guardian phone</Label>
            <Input
              // value={studentData.guardianPhone}
              {...register("guardianPhone")}
              type="text"
              placeholder="Student parents phone"
            />
            <Label htmlFor="address">Address</Label>
            <Input
              // value={studentData.address}
              {...register("address")}
              type="text"
              placeholder="Present Address"
            />
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <select
              {...register("bloodGroup")}
              className="border p-2 rounded-md"
            >
              <option
                selected={studentData.bloodGroup === "A+" ? "selected" : ""}
                value={"A+"}
              >
                A+
              </option>
              <option
                selected={studentData.bloodGroup === "A-" ? "selected" : ""}
                value={"A-"}
              >
                A-
              </option>
              <option
                selected={studentData.bloodGroup === "B+" ? "selected" : ""}
                value={"B+"}
              >
                B+
              </option>
              <option
                selected={studentData.bloodGroup === "B-" ? "selected" : ""}
                value={"B-"}
              >
                B-
              </option>
              <option
                selected={studentData.bloodGroup === "AB+" ? "selected" : ""}
                value={"AB+"}
              >
                AB+
              </option>
              <option
                selected={studentData.bloodGroup === "AB-" ? "selected" : ""}
                value={"AB-"}
              >
                AB-
              </option>
              <option
                selected={studentData.bloodGroup === "O+" ? "selected" : ""}
                value={"O+"}
              >
                O+
              </option>
              <option
                selected={studentData.bloodGroup === "O-" ? "selected" : ""}
                value={"O-"}
              >
                O-
              </option>
            </select>
            
            <Label htmlFor="roll">Board Roll</Label>
            <Input
              value={studentData.roll}
              {...register("roll")}
              type="text"
              placeholder="Board Roll"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="studentId">Student Id.</Label>
            <Input
              value={studentData.studentId}
              {...register("studentId", { required: true })}
              type="text"
              placeholder="Student Identification no"
            />
            <Label htmlFor="institute">Institute</Label>
            <select
              {...register("institute", { required: true })}
              className="border p-2 rounded-md text-sm text-slate-500"
            >
              <option
                selected={studentData.institute === "NIET" ? "selected" : ""}
                value={"NIET"}
              >
                NIET
              </option>
              <option
                selected={studentData.institute === "WII" ? "selected" : ""}
                value={"WII"}
              >
                WII
              </option>
            </select>
            <Label htmlFor="studentType">Student type</Label>
            <select
              {...register("studentType", { required: true })}
              className="border p-2 rounded-md text-sm text-slate-500"
            >
              <option
                selected={
                  studentData.studentType === "Regular" ? "selected" : ""
                }
                value={"Regular"}
              >
                Regular
              </option>
              <option
                selected={
                  studentData.studentType === "Irregular" ? "selected" : ""
                }
                value={"Irregular"}
              >
                Irregular
              </option>
            </select>
            <Label htmlFor="session">Session</Label>
            <select
              {...register("session", { required: true })}
              className="border p-2 rounded-md text-sm text-slate-500"
            >
              <option
                selected={
                  studentData.studentType === "2015-16" ? "selected" : ""
                }
                value={"2015-16"}
              >
                2015-16
              </option>
              <option
                selected={
                  studentData.studentType === "2016-17" ? "selected" : ""
                }
                value={"2016-17"}
              >
                2016-17
              </option>
              <option
                selected={
                  studentData.studentType === "2017-18" ? "selected" : ""
                }
                value={"2017-18"}
              >
                2017-18
              </option>
              <option
                selected={
                  studentData.studentType === "2018-19" ? "selected" : ""
                }
                value={"2018-19"}
              >
                2018-19
              </option>
              <option
                selected={
                  studentData.studentType === "2019-20" ? "selected" : ""
                }
                value={"2019-20"}
              >
                2019-20
              </option>
              <option
                selected={
                  studentData.studentType === "2020-21" ? "selected" : ""
                }
                value={"2020-21"}
              >
                2020-21
              </option>
              <option
                selected={
                  studentData.studentType === "2021-22" ? "selected" : ""
                }
                value={"2021-22"}
              >
                2021-22
              </option>
              <option
                selected={
                  studentData.studentType === "2022-23" ? "selected" : ""
                }
                value={"2022-23"}
              >
                2022-23
              </option>
              <option
                selected={
                  studentData.studentType === "2023-24" ? "selected" : ""
                }
                value={"2023-24"}
              >
                2023-24
              </option>
              <option
                selected={
                  studentData.studentType === "2024-25" ? "selected" : ""
                }
                value={"2024-25"}
              >
                2024-25
              </option>
              <option
                selected={
                  studentData.studentType === "2025-26" ? "selected" : ""
                }
                value={"2025-26"}
              >
                2025-26
              </option>
              <option
                selected={
                  studentData.studentType === "2026-27" ? "selected" : ""
                }
                value={"2026-27"}
              >
                2026-27
              </option>
              <option
                selected={
                  studentData.studentType === "2027-28" ? "selected" : ""
                }
                value={"2027-28"}
              >
                2027-28
              </option>
              <option
                selected={
                  studentData.studentType === "2028-29" ? "selected" : ""
                }
                value={"2028-29"}
              >
                2028-29
              </option>
              <option
                selected={
                  studentData.studentType === "2029-30" ? "selected" : ""
                }
                value={"2029-30"}
              >
                2029-30
              </option>
              <option
                selected={
                  studentData.studentType === "2030-31" ? "selected" : ""
                }
                value={"2030-31"}
              >
                2030-31
              </option>
            </select>

            <Label htmlFor="semester">Semester</Label>
            <select
              {...register("semester", { required: true })}
              className="border p-2 rounded-md text-sm text-slate-500"
            >
              <option
                selected={studentData.semester === "1st" ? "selected" : ""}
                value={"1st"}
              >
                1st
              </option>
              <option
                selected={studentData.semester === "2nd" ? "selected" : ""}
                value={"2nd"}
              >
                2nd
              </option>
              <option
                selected={studentData.semester === "3rd" ? "selected" : ""}
                value={"3rd"}
              >
                3rd
              </option>
              <option
                selected={studentData.semester === "4th" ? "selected" : ""}
                value={"4th"}
              >
                4th
              </option>
              <option
                selected={studentData.semester === "5th" ? "selected" : ""}
                value={"5th"}
              >
                5th
              </option>
              <option
                selected={studentData.semester === "6th" ? "selected" : ""}
                value={"6th"}
              >
                6th
              </option>
              <option
                selected={studentData.semester === "7th" ? "selected" : ""}
                value={"7th"}
              >
                7th
              </option>
              <option
                selected={studentData.semester === "8th" ? "selected" : ""}
                value={"8th"}
              >
                8th
              </option>
            </select>
            <Label htmlFor="registrationNumber">Registration no.</Label>
            <Input
              value={studentData.registrationNumber}
              {...register("registrationNumber")}
              type="text"
              placeholder="Registration Number"
            />
          </div>
        </div>
        <Button className="mt-5">Update & Save</Button>
      </form>
    </div>
  );
}

export default EditStudentForm;

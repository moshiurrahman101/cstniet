"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email!").min(1, "Email is required."),
  phone: z
    .number()
    .int()
    .positive("Phone number must be positive number.")
    .min(10, {
      message: "Number is invalid!",
    }),
  password: z.string().min(8, {
    message: "Password must be 8 character!",
  }),
});

function LoginForm() {
  const [message, setMessage] = useState({});

  const form =
    useForm <
    z.infer <
    typeof formSchema >>
      {
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: 0,
          password: "",
        },
      };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (e.target[0].value=="" || e.target[1].value=="" || e.target[2].value=="" || e.target[3].value=="") {
      alert('Field canot be empty');
    }

    const values = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: parseInt(e.target[2].value),
      password: e.target[3].value,
    }
    
    try {
      const validatedValues = formSchema.parse(values);
      console.log(validatedValues);
      setMessage({
        type: "success",
        data: "Successfully Submited!"
      })
    } catch (e) {
      if (e instanceof z.ZodError) {
        // Handle validation errors
        console.error("Validation errors:", e.errors);
        setMessage({
          type: "error",
          data: "Validation error! Recheck & submit again."
        })
      } else {
        // Handle other types of errors
        console.error("Unexpected error:", e);
      }
    }
  }

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-[400px] rounded-md shadow-lg p-5">
        {
          message?
          <div className={message.type=="success"? "bg-teal-200 text-green-700":"bg-red-200 text-red-700" + "px-7 text-sm"}><span className="my-5 mx-10">{message.data}</span></div>
          :
          <div></div>
        }
        <h2 className="text-[24px] font-bold text-slate-800 text-center pb-5">
          Login your account!
        </h2>
        <form onSubmit={onSubmit}>

          <Label htmlFor="name">Your full name</Label>
          <Input type="text" className="mb-2"/>
          <Label htmlFor="email">Your email address</Label>
          <Input type="email" className="mb-2"/>
          <Label htmlFor="phone">Your phone number</Label>
          <Input type="tel" className="mb-2"/>
          <Label htmlFor="password">Password</Label>
          <Input type="password" className="mb-2"/>

          <Button className="mt-5">Signup</Button>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;

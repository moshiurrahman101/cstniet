"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { firestore } from "@/firebase/firebase";
import {collection, addDoc} from "firebase/firestore"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function SignupForm() {
  const [message, setMessage] = useState({});
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const SignupEntryFormHandle = async (formData) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        try {
          const docRef = addDoc(collection(firestore, "users"), {
            uid: user.uid,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          })
          
          setMessage({
            type:"success",
            data: "User created succesfully!"
          });
          router.push('/login')
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-[400px] rounded-md shadow-lg p-5">
        <h2 className="text-[24px] font-bold text-slate-800 text-center pb-5">
          Create an account!
        </h2>
        {message?.type == "success" && (
          <p className="text-sm font-bold py-2 px-4 bg-green-300 text-green-600">
            {message.data}
          </p>
        )}
        {message?.type == "error" && (
          <p className="text-sm font-bold py-2 px-4 bg-red-300 text-red-600">
            {message.data}
          </p>
        )}
        <form action={handleSubmit(SignupEntryFormHandle)}>
          <Label htmlFor="name">Your full name</Label>
          <Input
            type="text"
            className="mb-2"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name?.type == "required" && (
            <p className="text-sm text-red-700 mb-2">Name is required</p>
          )}
          <Label htmlFor="email">Your email address</Label>
          <Input
            type="email"
            className="mb-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email?.type == "required" && (
            <p className="text-sm text-red-700 mb-2">Email is required</p>
          )}

          <Label htmlFor="phone">Your phone number</Label>
          <Input
            type="tel"
            className="mb-2"
            {...register("phone", {
              required: "Phone number is required",
              minLength: 10,
            })}
          />
          {errors.phone?.type == "required" && (
            <p className="text-sm text-red-700 mb-2">
              Phone number is required
            </p>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            className="mb-2"
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
          />
          {errors.password?.type == "required" && (
            <p className="text-sm text-red-700 mb-2">Password is required</p>
          )}
          {errors.password?.type == "minLength" && (
            <p className="text-sm text-red-700 mb-2">
              Password must be 8 characters
            </p>
          )}
          <Button className="mt-5 w-full">Signup</Button>
          <div className="text-sm text-center mt-5">
            <Label htmlFor="link">
              If you have already account?{" "}
              <Link href="/login" className="font-bold text-red-500">
                Signin
              </Link>
            </Label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

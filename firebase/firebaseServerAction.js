"use server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { firestore } from "./firebase";
import { CreateUser } from "./firestoreOperation";

export const SignupAction = async (formData) => {
    const message = {
        type: "",
        data: ""
      }
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      
      // create user in firestore
      CreateUser(user, userCredential);


    //   message.type = "success";
    //   message.data = "Succefull account created!";
    //   return message;

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        message.type = "error";
        message.data = "Something wrong! Internal problem.";
        return message;
    });

    
};

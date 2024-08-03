"use server"

import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export const CreateUser = async (userCredential, data) => {
    const docData = {
        name: data.name,
        phone: data.phone,
        email: userCredential.email,
        gender: null,
        dateOfBirth: null,
        profilePicture: null        
    };
    console.log(userCredential.uid);
    console.log(data);
    const res = db.collection('users').doc(userCredential.uid).set(docData);
    if (res) {
        console.log("data created")
    }else{
        console.log("something wrong, canot create")
    }
}
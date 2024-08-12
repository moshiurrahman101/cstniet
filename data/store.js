import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authSlices";
import studentsSlices from "./slices/studentsSlices";

export const store = configureStore({
    reducer:{
        auth: authSlices,
        students: studentsSlices,
    }
})


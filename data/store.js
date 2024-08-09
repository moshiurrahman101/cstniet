import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authSlices";

export const store = configureStore({
    reducer:{
        auth: authSlices
    }
})


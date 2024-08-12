import { createSlice } from "@reduxjs/toolkit";

// Initial state is an object with user and authentication status
const initialState = {
  students: null,
};

const StudentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    getStudents: (state, action) => {
       // Extract and store only serializable data
       state.students = action.payload;
    },
  },
});

export const { getStudents} = StudentSlice.actions;
export default StudentSlice.reducer;

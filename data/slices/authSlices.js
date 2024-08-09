import { createSlice } from "@reduxjs/toolkit";

// Initial state is an object with user and authentication status
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
       // Extract and store only serializable data
       const { uid, displayName, email, profilePhoto } = action.payload;
       state.user = { uid, displayName, email, profilePhoto };
       state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;

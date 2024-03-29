import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth/userSlice.js";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});

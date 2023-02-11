import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logOutUser: (state, action) => {
      state.user = false;
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

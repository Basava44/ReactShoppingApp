import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  details: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    signUp: {
      reducer: (state, action) => {
        state.details = action.payload;
        state.loggedIn = true;
      },
      prepare: (email, password) => {
        return {
          payload: {
            email,
            password,
          },
        };
      },
    },
    signIn: {
      reducer: (state, action) => {
        state.loggedIn = true;
        state.details = action.payload;
      },
      prepare: (email, password) => {
        return {
          payload: {
            email,
            password,
          },
        };
      },
    },
    signOut: {
      reducer: (state) => {
        state.loggedIn = false;
      },
    },
  },
});

export default userSlice.reducer;

export const { signIn, signUp, signOut } = userSlice.actions;

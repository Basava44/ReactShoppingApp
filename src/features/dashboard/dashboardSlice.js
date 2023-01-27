import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/mobileData";

const initialState = {
  data: data,
  selectedDevice: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    selectDevice: (state, action) => {
      state.selectedDevice = action.payload;
    },
  },
});

export const { selectDevice } = dashboardSlice.actions;

export default dashboardSlice.reducer;

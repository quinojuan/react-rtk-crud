import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [10],
  reducer: {}
});

export default taskSlice.reducer
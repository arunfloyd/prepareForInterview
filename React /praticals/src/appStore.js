import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const addStore = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default addStore;

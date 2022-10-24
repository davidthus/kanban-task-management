import { createSlice } from "@reduxjs/toolkit";
import { getTheme } from "../utils/getTheme";
import { getLocalStorage } from "../utils/localStorage";

const initialState = {
  theme: getTheme(),
  activeBoard: getLocalStorage("active-board") || "Platform Launch",
  sideBarsOpen: getLocalStorage("sidebars-open") || "false",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },

    toggleSidebar: (state) => {
      state.sideBarsOpen = state.sideBarsOpen === "true" ? "false" : "true";
    },

    toggleActiveBoard: (state, action) => {
      state.activeBoard = action.payload.board;
    },
  },
});

export default dataSlice.reducer;
export const { toggleTheme, toggleActiveBoard, toggleSidebar } =
  dataSlice.actions;

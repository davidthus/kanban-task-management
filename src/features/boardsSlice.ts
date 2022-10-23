import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import { appBoard } from "../types/boardTypes";
import { getLocalStorage } from "../utils/localStorage";

const initialState: appBoard[] = getLocalStorage("boards") || data.boards;

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    example: (state, action) => {},
  },
});

export const { example } = boardsSlice.actions;
export default boardsSlice.reducer;

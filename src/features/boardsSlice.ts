import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import { appBoard } from "../types/boardTypes";
import { getLocalStorage } from "../utils/localStorage";

const initialState: appBoard[] = getLocalStorage("boards") || data.boards;

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    toggleSubtask: (state, action) => {
      const { boardName, columnName, taskName, subtaskName } = action.payload;

      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );
      const taskIndex = state[boardIndex].columns[columnIndex].tasks.findIndex(
        (task) => task.title === taskName
      );
      const subtaskIndex = state[boardIndex].columns[columnIndex].tasks[
        taskIndex
      ].subtasks.findIndex((subtask) => subtask.title === subtaskName);

      state[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
        subtaskIndex
      ].isCompleted =
        !state[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
          subtaskIndex
        ].isCompleted;
    },

    deleteTask: (state, action) => {
      const { boardName, columnName, taskName } = action.payload;

      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );

      state[boardIndex].columns[columnIndex].tasks = state[boardIndex].columns[
        columnIndex
      ].tasks.filter((task) => task.title !== taskName);
    },

    deleteBoard: (state, action) => {
      const { boardName } = action.payload;
      return state.filter((board) => board.name !== boardName);
    },
    changeTaskStatus: (state, action) => {
      const { taskName, columnName, boardName, newColumnName } = action.payload;
      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );
      const taskToMove = state[boardIndex].columns[columnIndex].tasks.find(
        (task) => task.title === taskName
      );
      const newColumnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === newColumnName
      );

      if (taskToMove) {
        state[boardIndex].columns[columnIndex].tasks = state[
          boardIndex
        ].columns[columnIndex].tasks.filter((task) => task.title !== taskName);

        state[boardIndex].columns[newColumnIndex].tasks.push({
          ...taskToMove,
          status: state[boardIndex].columns[newColumnIndex].name,
        });
      }
    },
  },
});

export const { toggleSubtask, deleteTask, deleteBoard, changeTaskStatus } =
  boardsSlice.actions;
export default boardsSlice.reducer;

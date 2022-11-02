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
      const { boardName, columnName, taskName, subtaskIndex } = action.payload;

      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );
      const taskIndex = state[boardIndex].columns[columnIndex].tasks.findIndex(
        (task) => task.title === taskName
      );

      state[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
        subtaskIndex
      ].isCompleted =
        !state[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
          subtaskIndex
        ].isCompleted;
    },

    deleteTask: (state, action) => {
      const { boardName, columnName, taskIndex } = action.payload;

      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );

      state[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
    },

    deleteBoard: (state, action) => {
      const { boardName } = action.payload;
      return state.filter((board) => board.name !== boardName);
    },
    changeTaskStatus: (state, action) => {
      const { taskIndex, columnName, boardName, newColumnName } =
        action.payload;
      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );
      const taskToMove =
        state[boardIndex].columns[columnIndex].tasks[taskIndex];
      const newColumnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === newColumnName
      );

      if (taskToMove) {
        state[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
        state[boardIndex].columns[newColumnIndex].tasks.push({
          ...taskToMove,
          status: state[boardIndex].columns[newColumnIndex].name,
        });
      }
    },
    addTask: (state, action) => {
      const {
        boardName,
        columnName,
        task: { title, description, subtasks },
      } = action.payload;

      const boardIndex = state.findIndex((board) => board.name === boardName);
      const columnIndex = state[boardIndex].columns.findIndex(
        (column) => column.name === columnName
      );

      state[boardIndex].columns[columnIndex].tasks.push({
        title,
        description,
        status: columnName,
        subtasks,
      });
    },
    addBoard: (state, action) => {
      state.push(action.payload);
    },
    editBoard: (state, action) => {
      const { newBoard, activeBoard } = action.payload;
      const indexOfBoard = state.findIndex(
        (board) => board.name === activeBoard
      );

      state.splice(indexOfBoard, 1, newBoard);
    },
    editTask: (state, action) => {
      const { oldColumnName, boardName, columnName, index, task } =
        action.payload;
      const indexOfBoard = state.findIndex((board) => board.name === boardName);
      const indexOfColumn = state[indexOfBoard].columns.findIndex(
        (column) => column.name === columnName
      );
      const indexOfOldColumn = state[indexOfBoard].columns.findIndex(
        (column) => column.name === oldColumnName
      );

      if (oldColumnName === task.status) {
        state[indexOfBoard].columns[indexOfColumn].tasks.splice(index, 1, task);
      } else {
        state[indexOfBoard].columns[indexOfOldColumn].tasks.splice(index, 1);
        state[indexOfBoard].columns[indexOfColumn].tasks.push(task);
      }
    },
  },
});

export const {
  toggleSubtask,
  deleteTask,
  deleteBoard,
  changeTaskStatus,
  addTask,
  addBoard,
  editBoard,
  editTask,
} = boardsSlice.actions;
export default boardsSlice.reducer;

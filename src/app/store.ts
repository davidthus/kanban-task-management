import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import boardsSlice from "../features/boardsSlice";
import dataSlice from "../features/dataSlice";
import modalSlice from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    boards: boardsSlice,
    data: dataSlice,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

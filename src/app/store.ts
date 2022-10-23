import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import boardsSlice from "../features/boardsSlice";
import dataSlice from "../features/dataSlice";

export const store = configureStore({
  reducer: {
    boards: boardsSlice,
    data: dataSlice,
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

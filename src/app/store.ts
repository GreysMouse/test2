import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pagesReducer } from '../utils/slices/pagesSlice';
import { usersReducer } from '../utils/slices/usersSlice';

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    users: usersReducer
  },
});

export type TDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1 as number
}

const pagesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentPage: (state, action: { payload: number }) => {
      state.currentPage = action.payload;
    },
  }
});

export const { setCurrentPage } = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;

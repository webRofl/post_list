import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPaginationState {
  page: number;
}

const initialState: IPaginationState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state: IPaginationState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const paginationAction = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;

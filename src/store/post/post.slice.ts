import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPostState {
  total: number;
  inputValue: string;
  isSearch: boolean;
}

const initialState: IPostState = {
  total: 0,
  inputValue: '',
  isSearch: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setTotal: (state: IPostState, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setInputValue: (state: IPostState, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setIsSearch: (state: IPostState, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
  },
});

export const postAction = postSlice.actions;
export default postSlice.reducer;

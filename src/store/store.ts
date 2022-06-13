import { paginationReducer } from './pagination/pagination.slice';
import { postAPI } from './post/post.api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsSlice from './post/post.slice';

const rootReducer = combineReducers({
  post: postsSlice,
  pagination: paginationReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

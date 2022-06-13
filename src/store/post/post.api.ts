import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost, ISortPostsParams } from './post.types';

interface IResponseAllPosts {
  limit: number;
  posts: IPost[];
  skip: number;
  total: number;
}

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IResponseAllPosts, number>({
      query: (skip: number) => ({
        url: '/posts',
        params: {
          limit: 10,
          skip: skip,
        },
      }),
    }),
    sortPosts: build.query<IResponseAllPosts, ISortPostsParams>({
      query: (payload: ISortPostsParams) => ({
        url: '/posts/search',
        params: {
          q: payload.q,
          skip: payload.skip,
          limit: 10,
        },
      }),
    }),
    fetchPost: build.query<IPost, number>({
      query: (id: number) => ({
        url: '/posts/' + id,
      }),
    }),
  }),
});

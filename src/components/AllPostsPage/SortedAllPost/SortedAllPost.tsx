import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { paginationAction } from '../../../store/pagination/pagination.slice';
import { postAPI } from '../../../store/post/post.api';
import { postAction } from '../../../store/post/post.slice';
import { IPost } from '../../../store/post/post.types';
import ErrorComponent from '../../common/ErrorComponent/ErrorComponent';
import Post from '../../common/Post/Post';
import Preloader from '../../common/Preloader/Preloader';
import classes from './SortedAllPost.module.css';

const SortedAllPost: React.FC = () => {
  const { page } = useAppSelector((state) => state.pagination);

  const { inputValue } = useAppSelector((state) => state.post);

  const { setTotal } = postAction;

  const { setPage } = paginationAction;

  const dispatch = useAppDispatch();

  const { isLoading, data, error } = postAPI.useSortPostsQuery({
    q: inputValue,
    skip: (page - 1) * 10,
  });

  useEffect(() => {
    if (typeof data?.total === 'number') {
      dispatch(setTotal(data?.total));
      dispatch(setPage(1));
    }
  }, [data?.total]);

  if (isLoading) return <Preloader />;

  if (error)
    return (
      <ErrorComponent error="Failed to load sorted posts. Try later please." />
    );

  if (data?.total === 0)
    return <ErrorComponent error={`Nothing found on request ${inputValue}`} />;

  return (
    <div className={classes.sortedAllPosts__wrapper}>
      <ul>
        {data?.posts &&
          data.posts.map((post: IPost) => {
            return <Post key={post.id} title={post.title} id={post.id} />;
          })}
      </ul>
    </div>
  );
};

export default SortedAllPost;

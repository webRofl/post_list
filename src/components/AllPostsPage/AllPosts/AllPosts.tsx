import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IPost } from '../../../store/post/post.types';
import { postAction } from '../../../store/post/post.slice';
import ErrorComponent from '../../common/ErrorComponent/ErrorComponent';
import Preloader from '../../common/Preloader/Preloader';
import { postAPI } from '../../../store/post/post.api';
import classes from './AllPosts.module.css';
import Post from '../../common/Post/Post';

const AllPosts: React.FC = () => {
  const { page } = useAppSelector((state) => state.pagination);

  const { isLoading, data, error } = postAPI.useFetchAllPostsQuery(
    10 * (page - 1)
  );

  const dispatch = useAppDispatch();

  const { setTotal } = postAction;

  useEffect(() => {
    if (data?.total) dispatch(setTotal(data?.total));
  }, [data?.total]);

  if (isLoading) return <Preloader />;

  if (error)
    return <ErrorComponent error={'Failed to load posts. Try later please.'} />;

  return (
    <div className={classes.allPosts__wrapper}>
      <ul>
        {data?.posts &&
          data?.posts.map((post: IPost) => {
            return <Post key={post.id} title={post.title} id={post.id} />;
          })}
      </ul>
    </div>
  );
};

export default AllPosts;

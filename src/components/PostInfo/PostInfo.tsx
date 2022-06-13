import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { postAPI } from '../../store/post/post.api';
import ErrorComponent from '../common/ErrorComponent/ErrorComponent';
import Preloader from '../common/Preloader/Preloader';
import classes from './PostInfo.module.css';

const PostInfo: React.FC = () => {
  const matches = useMatch('/:id');

  const navigate = useNavigate();

  const { error, isLoading, data } = postAPI.useFetchPostQuery(
    parseInt(matches?.params.id ?? '0')
  );

  const handleClickBack = () => {
    navigate('/');
  };

  if (isLoading) return <Preloader />;

  if (error)
    return <ErrorComponent error="Failed to load post. Try later please." />;

  return (
    <div className={classes.postInfo__wrapper}>
      <button onClick={handleClickBack} className={classes.postInfo__button}>
        Back to main page
      </button>
      <span className={classes.postInfo__title}>{data?.title}</span>
      <span>{data?.body}</span>
    </div>
  );
};

export default PostInfo;

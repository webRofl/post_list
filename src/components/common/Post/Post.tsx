import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Post.module.css';

interface IPostProps {
  title: string;
  id: number;
}

const Post: React.FC<IPostProps> = ({ title, id }) => {
  const navigate = useNavigate();

  const handleClickPost = () => {
    navigate('/' + id);
  };

  return (
    <li className={classes.post__wrapper} onClick={handleClickPost}>
      {title}
    </li>
  );
};

export default Post;

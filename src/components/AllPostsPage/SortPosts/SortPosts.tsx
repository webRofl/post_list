import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { postAction } from '../../../store/post/post.slice';
import classes from './SortPosts.module.css';

const SortPosts: React.FC = () => {
  const dispatch = useAppDispatch();

  const { setInputValue, setIsSearch } = postAction;

  const { inputValue } = useAppSelector((state) => state.post);

  const [inputValueLocal, setInputValueLocal] = useState<string>(inputValue);

  const handleClickFind = () => {
    if (!inputValueLocal) {
      dispatch(setIsSearch(false));
      return;
    }
    dispatch(setIsSearch(true));
    dispatch(setInputValue(inputValueLocal));
  };

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValueLocal(event.currentTarget.value);
  };

  return (
    <div className={classes.sortPosts__wrapper}>
      <input
        type="text"
        value={inputValueLocal}
        onChange={handleChangeInputValue}
        className={classes.sortPosts__input}
        placeholder="find something"
        autoFocus
      />
      <button onClick={handleClickFind} className={classes.sortPosts__button}>
        Find
      </button>
    </div>
  );
};

export default SortPosts;

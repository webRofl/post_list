import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { paginationAction } from '../../../store/pagination/pagination.slice';
import classes from './Pagination.module.css';

const Pagination: React.FC = () => {
  const { total } = useAppSelector((state) => state.post);

  const { page } = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();

  const { setPage } = paginationAction;

  const handleClickDigit = (event: React.MouseEvent) => {
    if (event.currentTarget.textContent)
      dispatch(setPage(parseInt(event.currentTarget.textContent)));
  };

  const paginationMapping = (total: number) => {
    const result: JSX.Element[] = [];
    for (let i = 0; i < total; i += 10) {
      result.push(
        <span
          key={i}
          className={
            (page - 1) * 10 === i
              ? `${classes.pagination__digit_active} ${classes.pagination__digit} `
              : classes.pagination__digit
          }
          onClick={handleClickDigit}
        >
          {i / 10 + 1}
        </span>
      );
    }
    return result;
  };

  if (total === 0) return <span></span>;

  return (
    <div className={classes.pagination__wrapper}>
      {paginationMapping(total)}
    </div>
  );
};

export default Pagination;

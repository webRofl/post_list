import React from 'react';
import classes from './ErrorComponent.module.css';

interface IErrorComponentProps {
  error: string;
}

const ErrorComponent: React.FC<IErrorComponentProps> = ({ error }) => {
  return (
    <div className={classes.error__wrapper}>
      <span className={classes.error__text}>{error}</span>
    </div>
  );
};

export default ErrorComponent;

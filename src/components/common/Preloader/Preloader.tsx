import React from 'react';
import preloaderGif from '../../../assets/images/preloader.gif';
import classes from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={classes.preloader__wrapper}>
      <img src={preloaderGif} alt="preloader" />
    </div>
  );
};

export default Preloader;

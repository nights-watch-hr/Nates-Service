import React from 'react';
import MediaShare from './mediaShare';
import style from '../../../styles/largeArtwork.scss';

const LargeArtwork = props => {
  return (
    <div className={style.artworkContainer}>
      <a className={style.largeArtwork} href="">
        <img src={props.albumArt} />
      </a>
      <MediaShare />
    </div>
  );
};

export default LargeArtwork;

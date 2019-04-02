import React from 'react';
import style from '../../../styles/largeArtwork';

const LargeArtwork = props => {
  return (
    <a className={style.largeArtwork} href="">
      <img src={props.albumArt} />
    </a>
  );
};

export default LargeArtwork;

import React from 'react';
import PreviousSongIcon from '../../../../icons/previousSongIcon';
import NextSongIcon from '../../../../icons/NextSongIcon';
import PlaySongIcon from '../../../../icons/PlaySongIcon';
import style from '../../../../styles/playerControls';

const playerControls = props => {
  return (
    <div className={style.playerControlsContainer}>
      <a href="">
        <PreviousSongIcon />
      </a>
      <a href="">
        <PlaySongIcon />
      </a>
      <a href="">
        <NextSongIcon />
      </a>
    </div>
  );
};

export default playerControls;

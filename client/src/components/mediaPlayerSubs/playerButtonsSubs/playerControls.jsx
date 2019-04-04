import React from 'react';
import PreviousSongIcon from '../../../../icons/previousSongIcon';
import NextSongIcon from '../../../../icons/nextSongIcon';
import PlaySongIcon from '../../../../icons/playSongIcon';
import PauseSongIcon from '../../../../icons/pauseSongIcon';
import style from '../../../../styles/playerControls';

const playerControls = props => {
  return (
    <div className={style.playerControlsContainer}>
      <a onClick={props.previousSong}>
        <PreviousSongIcon />
      </a>
      {(props.playState === null || props.playState === 'paused') && (
        <a onClick={props.playSong}>
          <PlaySongIcon />
        </a>
      )}
      {props.playState === 'playing' && (
        <a onClick={props.pauseSong}>
          <PauseSongIcon />
        </a>
      )}
      <a onClick={props.nextSong}>
        <NextSongIcon />
      </a>
    </div>
  );
};

export default playerControls;

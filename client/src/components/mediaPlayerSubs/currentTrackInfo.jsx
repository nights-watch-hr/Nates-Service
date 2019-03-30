import React from 'react';
import style from '../../../styles/currentTrackInfo';

const TrackInfo = props => {
  return (
    <div className={style.trackInfoDiv}>
      <a href={`localhost:3737?id=${props.track.id}`}>
        <img className={style.albumArt} src={props.track.albumArt} />
      </a>
      <div id="artwork-toggle">
        {/* this will be hidden if there is no queue */}
        <img src="" />
        {/* beatport uses an svg here for animation */}
      </div>
      <div className={style.songInfo}>
        <span className={style.title}>
          <a href={`localhost:3737?id=${props.track.id}`}>
            <span>{props.track.title}</span>
            <span>{props.track.version}</span>
          </a>
        </span>
        <span className={style.artist}>{props.track.artist}</span>
      </div>
    </div>
  );
};

export default TrackInfo;

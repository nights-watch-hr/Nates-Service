import React from 'react';
import BuyButton from '../queueSubs/buyButtonQueue';
import RemoveFromQueueIcon from '../../../icons/removeFromQueueIcon';
import PlaySongIcon from '../../../icons/PlaySongIcon';
import style from '../../../styles/queuedTrack';

const QueuedTrack = props => {
  const { track } = props;
  return (
    <li
      className={
        props.index === props.currentTrackIndex
          ? style.currentTrack
          : style.queuedTrack
      }
      onClick={e => {
        props.applyNewCurrentTrack(e, props.index);
      }}
    >
      <div className={style.albumArtwork}>
        <PlaySongIcon />
        <img src={track.albumArt} />
      </div>
      <div className={style.trackInfo}>
        <span className={style.titleAndVersion}>
          <a className={style.title} href={`localhost:3737?id=${track.id}`}>
            {track.title}
          </a>
          <span className={style.version}>{track.version}</span>
        </span>
        <span className={style.artist}>{track.artist}</span>
      </div>
      <div className={style.genre}>
        <span className={style.genreSpan}>{track.genre}</span>
        <span className={style.trackLength}>{track.length}</span>
      </div>
      <div className={style.djInfo}>
        <span>{track.key}</span>
        <span className={style.bpm}>{track.bpm} BPM</span>
      </div>
      <div className={style.label}>
        <span className={style.labelSpan}>{track.label}</span>
        <span className={style.releaseDate}>{track.released}</span>
      </div>
      <div className={style.buyButtonContainer}>
        <BuyButton price={track.price} />
      </div>
      <div className={style.removeFromQueue}>
        <a onClick={e => props.removeFromQueue(e, props.index)} href="">
          <RemoveFromQueueIcon />
        </a>
      </div>
    </li>
  );
};

export default QueuedTrack;

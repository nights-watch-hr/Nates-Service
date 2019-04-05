import React from 'react';
import BuyButton from '../queueSubs/buyButtonQueue';
import RemoveFromQueueIcon from '../../../icons/removeFromQueueIcon';
import PlaySongIconQueue from '../../../icons/playSongIcon';
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
    >
      <div
        className={style.albumArtwork}
        onClick={e => {
          props.applyNewCurrentTrack(e, props.index);
        }}
      >
        <PlaySongIconQueue />
        <img src={track.albumArt} />
      </div>
      <div
        className={style.trackInfo}
        onClick={e => {
          props.applyNewCurrentTrack(e, props.index);
        }}
      >
        <span className={style.titleAndVersion}>
          <a className={style.title} href={`localhost:3737?id=${track.id}`}>
            {track.title}
          </a>
          <span className={style.version}>{track.version}</span>
        </span>
        <span className={style.artist}>{track.artist}</span>
      </div>
      <div
        className={style.genre}
        onClick={e => {
          props.applyNewCurrentTrack(e, props.index);
        }}
      >
        <span className={style.genreSpan}>{track.genre}</span>
        <span className={style.trackLength}>
          {props.calculateLengthInMinutes(track.length)}
        </span>
      </div>
      <div
        className={style.djInfo}
        onClick={e => {
          props.applyNewCurrentTrack(e, props.index);
        }}
      >
        <span>{track.key}</span>
        <span className={style.bpm}>{track.bpm} BPM</span>
      </div>
      <div
        className={style.label}
        onClick={e => {
          props.applyNewCurrentTrack(e, props.index);
        }}
      >
        <span className={style.labelSpan}>{track.label}</span>
        <span className={style.releaseDate}>{track.released}</span>
      </div>
      <div className={style.buyButtonContainer}>
        <a>
          <BuyButton price={track.price} />
        </a>
      </div>
      <div className={style.removeFromQueue}>
        <a onClick={e => props.removeFromQueue(e, props.index)}>
          <RemoveFromQueueIcon />
        </a>
      </div>
    </li>
  );
};

export default QueuedTrack;

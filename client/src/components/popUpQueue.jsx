import React, { Component } from 'react';
import ClearQueue from './queueSubs/clearQueue';
import QueuedTrack from './queueSubs/queuedTrack';
import LargeArtwork from './queueSubs/largeArtwork';
import style from '../../styles/popUpQueue';

const MediaPlayerWithQueue = props => {
  return (
    <div>
      <div>
        <ClearQueue />
      </div>
      <div>
        {props.artworkEnlarged && <LargeArtwork albumArt={props.albumArt} />}
      </div>
      <div
        className={
          props.artworkEnlarged
            ? style.queueContainerWithArtwork
            : style.queueContainerNoArtwork
        }
      >
        <ul id="tracks-in-queue-list">
          {props.queuedTracks.map((track, index) => (
            <QueuedTrack key={index} track={track} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MediaPlayerWithQueue;

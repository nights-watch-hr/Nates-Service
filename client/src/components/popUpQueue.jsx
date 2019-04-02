import React, { Component } from 'react';
import ClearQueue from './queueSubs/clearQueue';
import QueuedTrack from './queueSubs/queuedTrack';
import style from '../../styles/popUpQueue';

const MediaPlayerWithQueue = props => {
  return (
    <div>
      <div>
        <ClearQueue />
      </div>
      <div className={style.queueContainer}>
        {this.state.artworkExpanded && (
          <a href="">
            <img src="" />
            {/* large album image - toggled from hidden/visible by button in media player (need to figure out how to animate it) */}
          </a>
        )}
        <ul id="tracks-in-queue-list">
          {this.props.queuedTracks.map((track, index) => (
            <QueuedTrack key={index} track={track} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MediaPlayerWithQueue;

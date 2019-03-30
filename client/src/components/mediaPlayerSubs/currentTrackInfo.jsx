import React from 'react';

const TrackInfo = props => {
  return (
    <div id="current-track-info-container">
      <div id="current-track">
        <a href={`localhost:3737?id=${props.track.id}`}>
          <img src={props.track.albumArt} />
        </a>
        <div id="artwork-toggle">
          {/* this will be hidden if there is no queue */}
          <img src="" />
          {/* beatport uses an svg here for animation */}
        </div>
        <div id="track-info">
          <span id="title">
            <a href={`localhost:3737?id=${props.track.id}`}>
              <span>{props.track.title}</span>
              <span>{props.track.version}</span>
            </a>
          </span>
          <span>{props.track.artist}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;

import React from 'react';
import BuyButton from '../buyButton';

const QueuedTrack = props => {
  return (
    <li>
      <div id="track-artwork">
        <img src="" alt="" />
      </div>
      <div id="track-artist">
        <span>
          <a href={`localhost:3737?id=${track.id}`}>Track Title</a>
          <span>Track Version</span>
        </span>
        <span>Track Artist</span>
      </div>
      <div id="track-genre">
        <span>Track Genre</span>
        <span>Track Lengthh</span>
      </div>
      <div id="track-key">
        <span>Track Key</span>
        <span>Track BPM</span>
      </div>
      <div id="track-label">
        <span>Label</span>
        <span>Release Date</span>
      </div>
      <div id="track-button container">
        <BuyButton />
        <a href="">
          <img src="" alt="" />
          {/* remove song X - beatport uses an svg here, but it may not be necessary*/}
        </a>
      </div>
    </li>
  );
};

export default QueuedTrack;

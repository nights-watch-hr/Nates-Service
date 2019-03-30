import React from 'react';
import BuyButton from '../mediaPlayerSubs/buyButton';

const QueuedTrack = props => {
  const { track } = props;
  return (
    <li>
      <div id="track-artwork">
        <img src={track.albumArt} />
      </div>
      <div id="track-artist">
        <span>
          <a href={`localhost:3737?id=${track.id}`}>{track.title}</a>
          <span>{track.version}</span>
        </span>
        <span>{track.artist}</span>
      </div>
      <div id="track-genre">
        <span>{track.genre}</span>
        <span>{track.length}</span>
      </div>
      <div id="track-key">
        <span>{track.key}</span>
        <span>{track.bpm}</span>
      </div>
      <div id="track-label">
        <span>{track.label}</span>
        <span>{track.released}</span>
      </div>
      <div id="track-button container">
        <BuyButton />
        <a href="">
          <img src="" />
          {/* remove song X - beatport uses an svg here, but it may not be necessary*/}
        </a>
      </div>
    </li>
  );
};

export default QueuedTrack;

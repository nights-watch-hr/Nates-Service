import React from 'react';

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
      <div id="track-button container">placeholder</div>
    </li>
  );
};

export default QueuedTrack;

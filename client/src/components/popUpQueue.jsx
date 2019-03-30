import React, { Component } from 'react';
import ClearQueue from './queueSubs/clearQueue';
import QueuedTrack from './queueSubs/queuedTrack';

class MediaPlayerWithQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworkExpanded: false
    };
  }

  render() {
    return (
      <div id="pop-up-queue-container">
        <div>
          <ClearQueue />
        </div>
        <div id="info-list-container">
          <a href="">
            <img src="" />
            {/* large album image - toggled from hidden/visible by button in media player (need to figure out how to animate it) */}
          </a>
          <ul id="tracks-in-queue-list">
            {this.props.queuedTracks.map((track, index) => (
              <QueuedTrack key={index} track={track} />
            ))}
            {/* map over queuedTracks here */}
          </ul>
        </div>
      </div>
    );
  }
}

export default MediaPlayerWithQueue;

import React, { Component } from 'react';
import ClearQueue from './queueSubs/clearQueue';
import QueuedTrack from './queueSubs/queuedTrack';

class MediaPlayerWithQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queuedTracks: []
    };
  }

  render() {
    return (
      <section>
        <div id="pop-up-queue-container">
          <div>
            <ClearQueue />
          </div>
          <div id="info-list-container">
            <a href="">
              <img src="" alt="" />
              {/* large album image - toggled from hidden/visible by button in media player (need to figure out how to animate it) */}
            </a>
            <ul id="tracks-in-queue-list">
              {this.state.queuedTracks.map((track, index) => (
                <QueuedTrack />
              ))}
              {/* map over queuedTracks here */}
            </ul>
          </div>
        </div>
        <div>{/* port over all media player jsx here? */}</div>
      </section>
    );
  }
}

export default MediaPlayerWithQueue;

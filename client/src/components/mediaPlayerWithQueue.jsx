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
          <ul id="tracks-in-queue">
            {this.state.queuedTracks.map((track, index) => (
              <QueuedTrack />
            ))}
            {/* map over queuedTracks here */}
          </ul>
        </div>
        <div>{/* port over all media player jsx here? */}</div>
      </section>
    );
  }
}

export default MediaPlayerWithQueue;

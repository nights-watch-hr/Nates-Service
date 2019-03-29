import React, { Component } from 'react';

class TrackInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null
    };
  }

  render() {
    return (
      <div id="current-track-info-container">
        <div id="current-track">
          <a href={`localhost:3737?id=${this.state.currentTrack.id}`}>
            <img src="" alt="" />
            {/* album artwork here from S3 */}
          </a>
          <div id="artwork-toggle">
            {/* this will be hidden if there is no queue */}
            <img src="" alt="" />
            {/* beatport uses an svg here for animation */}
          </div>
          <div id="track-info">
            <span id="title">
              <a href={`localhost:3737?id=${this.state.currentTrack.id}`}>
                <span>{this.state.currentTrack.title}</span>
                <span>{this.state.currentTrack.version}</span>
              </a>
            </span>
            <span>{this.state.currentTrack.artist}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackInfo;

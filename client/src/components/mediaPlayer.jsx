import React, { Component } from 'react';
import TrackInfo from './mediaPlayerSubs/currentTrackInfo';
import Waveform from './mediaPlayerSubs/waveform';
import PlayerButtons from './mediaPlayerSubs/playerButtons';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null
    };
  }

  render() {
    return (
      <section id="player-container">
        <div>placeholder</div>
      </section>
    );
  }
}

export default MediaPlayer;

import React, { Component } from 'react';

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: 'none' // this state applies to when the track is not started or has finished playing. Other values could be paused or playing
    };
  }

  render() {
    return (
      <div id="waveform-container">
        <div id="bpm-key-length-container">
          <span>{this.props.track.bpm}</span>
          <span>{this.props.track.key}</span>
          <span>{this.props.track.length}</span>
        </div>
        <div id="clickzone">
          {/* should scale with the size of the svg and stack on top of it */}
        </div>
        {/* do we need this canvas? <canvas id="waveform-svg" width="1050" height="90" /> */}
        <svg viewBox="0 0 1050 170">
          <image width="1050" height="170" href={this.props.track.waveform} />
        </svg>
      </div>
    );
  }
}

export default Waveform;

import React, { Component } from 'react';

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null
    };
  }

  render() {
    return (
      <div id="waveform-container">
        <div id="bpm-key-length-container">
          <span>{this.state.currentTrack.bpm}</span>
          <span>{this.state.currentTrack.key}</span>
          <span>{this.state.currentTrack.length}</span>
        </div>
        <div id="clickzone">{/* should scale with the size of the svg */}</div>
        <canvas id="waveform-svg">{/* svg goes here */}</canvas>
      </div>
    );
  }
}

export default Waveform;

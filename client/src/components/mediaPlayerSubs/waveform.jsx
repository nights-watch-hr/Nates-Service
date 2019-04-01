import React, { Component } from 'react';
import style from '../../../styles/waveform';

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: 'none' // this state applies to when the track is not started or has finished playing. Other values could be paused or playing
    };
  }

  render() {
    return (
      <div className={style.waveformDiv}>
        <div className={style.info}>
          <span>{this.props.track.bpm} BPM /</span>
          <span> {this.props.track.key} /</span>
          <span> {this.props.track.length}</span>
        </div>
        <div className={style.clickZone}>
          {/* should scale with the size of the svg and stack on top of it */}
        </div>
        {/* do we need this canvas? <canvas id="waveform-svg" width="1050" height="90" /> */}
        <svg
          height="130"
          width="42vw"
          viewBox="0 37 1050 200"
          preserveAspectRatio="none"
        >
          <image href={this.props.track.waveform} />
        </svg>
        <div className={style.zoomButton}>_</div>
      </div>
    );
  }
}

export default Waveform;

import React, { Component } from 'react';
import Waveform from '../mediaPlayerSubs/waveform';
import PlusSignIcon from '../../../icons/plusSignIcon';
import MinusSignIcon from '../../../icons/minusSignIcon';
import PlaytimeTrackerIcon from '../../../icons/playtimeTrackerIcon';
import style from '../../../styles/waveform';

class WaveformContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: null, // this state applies to when the track is not started or has finished playing. Other values could be paused or playing
      zoomed: false
    };
  }

  render() {
    return (
      <div className={style.waveformDiv}>
        <div className={style.info}>
          <span>{this.props.track.bpm} BPM /</span>
          <span> {this.props.track.key} /</span>
          <span>
            {' '}
            {this.props.calculateLengthInMinutes(this.props.track.length)}
          </span>
        </div>
        <div className={style.clickZone}>
          {/* should scale with the size of the svg and stack on top of it */}
        </div>
        {/* do we need this canvas? <canvas id="waveform-svg" width="1050" height="90" /> */}
        <Waveform svg={this.props.track.waveform} />
        <div className={style.zoomButton}>
          {this.state.zoomed && <MinusSignIcon />}
          {!this.state.zoomed && <PlusSignIcon />}
        </div>
      </div>
    );
  }
}

export default WaveformContainer;

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
      zoomed: false
    };
  }

  render() {
    console.log(this.props.playTime);
    let percentageFromLeft =
      (this.props.playTime / this.props.track.length) * 100;
    let trackerStyling = { left: `${percentageFromLeft}%` };

    return (
      <div className={style.waveformDiv} onClick={this.props.alterTime}>
        <span style={trackerStyling} className={style.playtimeTracker}>
          <PlaytimeTrackerIcon />
        </span>
        <div className={style.info}>
          <span>{this.props.track.bpm} BPM /</span>
          <span> {this.props.track.key} /</span>
          <span>
            {' '}
            {this.props.calculateLengthInMinutes(this.props.track.length)}
          </span>
        </div>
        {/* do we need this canvas for color change? <canvas id="waveform-svg" width="1050" height="90" /> */}
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

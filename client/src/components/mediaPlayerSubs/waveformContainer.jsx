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
    this.zoom = this.zoom.bind(this);
  }

  zoom(e) {
    e.preventDefault();
    let zoomed = !this.state.zoomed;
    this.setState({ zoomed });
  }

  render() {
    let percentageFromLeft =
      (this.props.playTime / this.props.track.length) * 100;
    let trackerStyling = { left: `${percentageFromLeft}%` };
    let trackerStylingEnd = { left: 99.5 + '%' };

    return (
      <div className={style.waveformDiv}>
        <span
          style={percentageFromLeft < 99.5 ? trackerStyling : trackerStylingEnd}
          className={style.playtimeTracker}
        >
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
        <div className={style.clickZone} onClick={this.props.alterTime} />
        {/* <canvas id="waveformCanvas" className={style.waveformCanvas} /> */}
        <Waveform svg={this.props.track.waveform} />
        <a className={style.zoomButton} onClick={this.zoom}>
          {this.state.zoomed && <MinusSignIcon />}
          {!this.state.zoomed && <PlusSignIcon />}
        </a>
      </div>
    );
  }
}

export default WaveformContainer;

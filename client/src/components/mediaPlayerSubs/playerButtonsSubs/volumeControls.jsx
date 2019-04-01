import React, { Component } from 'react';
import VolumeIcon from '../../../../icons/volumeIcon';
import style from '../../../../styles/volumeControls';

class volumeControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVolume: 75
    };
  }

  render() {
    return (
      <div className={style.volumeControlsContainer}>
        <a>
          <VolumeIcon />
          {/* <img src="" /> */}
          {/* volume off - beatport uses an svg here, but it may not be necessary*/}
        </a>
        <div className={style.volumeDrop}>
          <input type="range" orient="vertical" defaultValue="75" />
        </div>
      </div>
    );
  }
}

export default volumeControls;

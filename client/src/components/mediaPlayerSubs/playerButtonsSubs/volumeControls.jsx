import React from 'react';
import VolumeIcon from '../../../../icons/volumeIcon';
import style from '../../../../styles/volumeControls';

const VolumeControls = props => {
  return (
    <div className={style.volumeControlsContainer}>
      <a className={style.volumeIcon}>
        <VolumeIcon />
      </a>
      <div className={style.volumeDrop}>
        <input
          type="range"
          orient="vertical"
          defaultValue="75"
          onChange={props.adjustVolume}
        />
      </div>
    </div>
  );
};

export default VolumeControls;

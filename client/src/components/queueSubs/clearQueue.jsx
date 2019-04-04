import React from 'react';
import DownArrowInCircleIcon from '../../../icons/downArrowInCircleIcon';
import style from '../../../styles/ClearQueue';

const ClearQueue = props => {
  return (
    <div className={style.clearQueueContainer}>
      <a href="">CLEAR QUEUE</a>
      <a className={style.closeQueue} onClick={props.expandQueue} href="">
        <DownArrowInCircleIcon />
      </a>
    </div>
  );
};

export default ClearQueue;

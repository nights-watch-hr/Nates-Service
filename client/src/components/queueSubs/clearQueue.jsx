import React from 'react';
import DownArrowInCircleIcon from '../../../icons/downArrowInCircleIcon';
import style from '../../../styles/clearQueue.scss';

const ClearQueue = props => {
  return (
    <div className={style.clearQueueContainer}>
      <a className={style.clearQueue} onClick={props.clearQueue} href="">
        CLEAR QUEUE
      </a>
      <a className={style.closeQueue} onClick={props.expandQueue} href="">
        <DownArrowInCircleIcon />
      </a>
    </div>
  );
};

export default ClearQueue;

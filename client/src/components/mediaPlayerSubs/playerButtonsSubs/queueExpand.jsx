import React from 'react';
import QueueExpandIcon from '../../../../icons/queueExpandIcon';
import style from '../../../../styles/queueExpand.scss';

const QueueExpand = props => {
  return (
    <div
      className={
        props.queueOpen
          ? style.queueExpandContainerOpen
          : style.queueExpandContainerClosed
      }
    >
      <a onClick={props.expandQueue} href="">
        <QueueExpandIcon />
      </a>
    </div>
  );
};

export default QueueExpand;

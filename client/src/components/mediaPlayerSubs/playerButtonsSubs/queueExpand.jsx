import React from 'react';
import QueueExpand from '../../../../icons/queueExpandIcon';
import style from '../../../../styles/queueExpand';

const queueExpand = props => {
  return (
    <div className={style.queueExpandContainer}>
      <a href="">
        <QueueExpand />
      </a>
    </div>
  );
};

export default queueExpand;

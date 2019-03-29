import React from 'react';

const ClearQueue = props => {
  return (
    <div id="clear-queue-controls">
      <a href="">Clear Queue</a>
      <div id="clear-queue-button">
        <img src="" alt="" />
        {/* circle with carat - beatport uses an svg here, but it may not be necessary */}
      </div>
    </div>
  );
};

export default ClearQueue;

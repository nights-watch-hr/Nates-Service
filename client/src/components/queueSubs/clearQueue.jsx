import React from 'react';

const ClearQueue = props => {
  return (
    <div id="clear-queue-controls">
      <a href="">Clear Queue</a>
      <div id="close-queue-button">
        <img src="" />
        {/* circle with carat - beatport uses an svg here, but it may not be necessary */}
      </div>
    </div>
  );
};

export default ClearQueue;

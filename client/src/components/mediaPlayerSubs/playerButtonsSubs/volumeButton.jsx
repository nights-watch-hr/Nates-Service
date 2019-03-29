import React from 'react';

const volumeButton = props => {
  return (
    <div id="volume-button-parent">
      <a href="">
        <img src="" alt="" />
        {/* volume on - beatport uses an svg here, but it may not be necessary */}
        <img src="" alt="" />
        {/* volume off - beatport uses an svg here, but it may not be necessary*/}
      </a>
      <div id="volume-drop">
        <input type="range" orient="vertical" value="75" />
      </div>
    </div>
  );
};

export default volumeButton;

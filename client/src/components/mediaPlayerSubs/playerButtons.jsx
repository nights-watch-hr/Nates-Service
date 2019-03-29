import React, { Component } from 'react';

class PlayerButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null
    };
  }

  render() {
    return (
      <div id="player-buttons-container">
        <div>placeholder</div>
      </div>
    );
  }
}

export default PlayerButtons;

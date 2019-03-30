import React, { Component } from 'react';
import BuyButton from './buyButton';
import KeyboardShortcuts from './playerButtonsSubs/keyboardShortcuts';
import PlayerControls from './playerButtonsSubs/playerControls';
import QueueExpand from './playerButtonsSubs/queueExpand';

class PlayerButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: 'paused'
    };
  }

  render() {
    return (
      <div id="player-buttons-container">
        <BuyButton price={this.props.price} />
        <KeyboardShortcuts />
        <PlayerControls />
        <QueueExpand />
      </div>
    );
  }
}

export default PlayerButtons;

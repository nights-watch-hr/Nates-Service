import React, { Component } from 'react';

class buyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null
    };
  }

  render() {
    return (
      <div id="buy-button-container">
        <div id="buy-button">
          <button id="add-to-cart">
            <span>{this.state.props.currentTrack.price}</span>
          </button>
          <button id="launch-menu">
            <div id="launch-menu-icon">
              <img src="" alt="" />
              {/* beatport uses an svg here for animation */}
            </div>
            <div id="loading-menu-icon">
              <img src="" alt="" />
              {/* beatport uses an svg here for animation */}
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default buyButton;

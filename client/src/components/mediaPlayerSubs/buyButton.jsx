import React, { Component } from 'react';
import style from '../../../styles/buyButton';

class buyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false,
      loading: false
    };
  }

  render() {
    return (
      <div className={style.buyButtonContainer}>
        <div id="buy-button">
          <button className={style.buyButton}>
            <span>${this.props.price}</span>
          </button>
          <button className={style.launchMenu}>
            {this.state.loading && (
              <div id="loading-menu-icon">
                <img src="" />
                {/* beatport uses an svg here for animation */}
              </div>
            )}
            {!this.state.loading && (
              <div id="launch-menu-icon">
                <img src="" />
                {/* <svg>
                  <image src="client/images/down-arrow.svg" />
                </svg> */}
              </div>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default buyButton;

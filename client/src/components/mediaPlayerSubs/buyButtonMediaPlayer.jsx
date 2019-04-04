import React, { Component } from 'react';
import DownArrowIcon from '../../../icons/downArrowIcon';
import style from '../../../styles/buyButton';

class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false,
      loading: false
    };
  }

  render() {
    return (
      <div className={style.buyButtonContainerMediaPlayer}>
        <div id="buy-button">
          <button className={style.buyButton}>
            <span>${this.props.price}</span>
          </button>
          <button className={style.launchMenu}>
            {this.state.loading && (
              <div id="loading-menu-icon">
                <img src="" />
                {/* use svg here for animation */}
              </div>
            )}
            {!this.state.loading && (
              <div id="launch-menu-icon">
                <DownArrowIcon />
              </div>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default BuyButton;

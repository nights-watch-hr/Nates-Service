import React from 'react';
import StarIcon from '../../../icons/starIcon';
import HoldBinIcon from '../../../icons/holdBinIcon';
import PlusSignInCircleIcon from '../../../icons/plusSignInCircleIcon';
import style from '../../../styles/queueBuyButtonMenu';

const PlayerBuyButtonMenu = props => {
  return (
    <div className={style.playerBuyButtonContainer}>
      <ul className={style.cartList}>
        <li className={style.mainCart}>
          <span>
            <StarIcon /> Main Cart
          </span>
        </li>
        <li className={style.holdBin}>
          <span>
            <HoldBinIcon /> Hold Bin
          </span>
        </li>
      </ul>
      <button className={style.newCart}>
        <PlusSignInCircleIcon /> New Cart
      </button>
    </div>
  );
};

export default PlayerBuyButtonMenu;

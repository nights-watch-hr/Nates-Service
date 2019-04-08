import React from 'react';
import FacebookIcon from '../../../icons/facebookIcon';
import TwitterIcon from '../../../icons/twitterIcon';
import style from '../../../styles/mediaShare';

const MediaShare = props => {
  return (
    <div className={style.mediaShare}>
      <span className={style.facebook} href="">
        <FacebookIcon />
      </span>
      <span className={style.twitter}>
        <TwitterIcon />
      </span>
    </div>
  );
};

export default MediaShare;

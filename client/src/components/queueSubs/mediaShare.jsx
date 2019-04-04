import React from 'react';
import FacebookIcon from '../../../icons/facebookIcon';
import TwitterIcon from '../../../icons/twitterIcon';
import style from '../../../styles/mediaShare';

const MediaShare = props => {
  return (
    <div className={style.mediaShare}>
      <a className={style.facebook} href="">
        <FacebookIcon />
      </a>
      <a className={style.twitter} href="">
        <TwitterIcon />
      </a>
    </div>
  );
};

export default MediaShare;

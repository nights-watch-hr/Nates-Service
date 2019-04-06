import React from 'react';
import KeyboardIcon from '../../../../icons/keyboardIcon';
import style from '../../../../styles/keyboardShortcuts';

const keyboardShortcuts = props => {
  return (
    <div className={style.keyboardShortcutContainer}>
      <a id="placeholder for Keyboard Shortcuts Modal" href="">
        <KeyboardIcon />
      </a>
    </div>
  );
};

export default keyboardShortcuts;

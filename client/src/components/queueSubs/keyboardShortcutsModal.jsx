import React from 'react';
import style from '../../../styles/KeyboardShortcutsModal.scss';

const KeyboardShortcutsModal = props => {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalBody}>
        <div className={style.titleBar}>
          <h1>Keyboard Shortcuts</h1>
          <a href="#" className={style.closeModal} onClick={props.closeModal}>
            {' '}
            &#10006;{' '}
          </a>
        </div>
        <div className={style.mainContent}>
          <ul>
            <li>
              <span className={style.label}>toggle play/pause</span>
              <span className={style.shortcut}>
                <em>space</em>
              </span>
            </li>
            <li>
              <span className={style.label}>previous track in queue</span>
              <span className={style.shortcut}>
                {' '}
                <em>&#8592;</em>
              </span>
            </li>
            <li>
              <span className={style.label}>next track in queue</span>
              <span className={style.shortcut}>
                {' '}
                <em>&#8594;</em>
              </span>
            </li>
            <li>
              <span className={style.label}>previous track in track grid</span>
              <span className={style.shortcut}>
                <em>left arrow</em>{' '}
                <span className={status.shortcutOr}>or</span> <em>k</em>
              </span>
            </li>
            <li>
              <span className={style.label}>next track in track grid</span>
              <span className={style.shortcut}>
                <em>right arrow</em>{' '}
                <span className={status.shortcutOr}>or</span> <em>j</em>
              </span>
            </li>
            <li>
              <span className={style.label}>seek forward</span>
              <span className={style.shortcut}>
                <em>&gt;</em> <span className={status.shortcutOr}>or</span>{' '}
                <em>.</em>
              </span>
            </li>
            <li>
              <span className={style.label}>seek backwards</span>
              <span className={style.shortcut}>
                <em>&lt;</em> <span className={status.shortcutOr}>or</span>{' '}
                <em>,</em>
              </span>
            </li>
            <li>
              <span className={style.label}>toggle waveform zoom</span>
              <span className={style.shortcut}>
                <em>z</em>
              </span>
            </li>
            <li>
              <span className={style.label}>Add track to shopping cart</span>
              <span className={style.shortcut}>
                <em>b</em> <span className={status.shortcutOr}>or</span>{' '}
                <em>+</em> <span className={status.shortcutOr}>or</span>{' '}
                <em>=</em>
              </span>
            </li>
            <li>
              <span className={style.label}>toggle open playlist</span>
              <span className={style.shortcut}>
                <em>o</em> <span className={status.shortcutOr}>or</span>{' '}
                <em>i</em>
              </span>
            </li>
            <li>
              <span className={style.label}>toggle shortcuts</span>
              <span className={style.shortcut}>
                <em>?</em>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsModal;

import React, { Component } from 'react';
import KeyboardShortcutsModal from '../../queueSubs/keyboardShortcutsModal';
import KeyboardIcon from '../../../../icons/keyboardIcon';
import style from '../../../../styles/keyboardShortcuts';

class KeyboardShortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    let modalOpen = !this.state.modalOpen;
    this.setState({ modalOpen });
  }

  render() {
    return (
      <div className={style.keyboardShortcutContainer}>
        <a onClick={this.openModal}>
          <KeyboardIcon />
        </a>
        {this.state.modalOpen && (
          <KeyboardShortcutsModal
            className={style.modal}
            closeModal={this.openModal}
          />
        )}
      </div>
    );
  }
}

export default KeyboardShortcuts;

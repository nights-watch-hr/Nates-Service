import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null,
      queue: []
    };
  }

  render() {
    return (
      <div>
        <div id="media-player">Initial</div>
        <div id="pop-up-media-player">Conditional</div>
      </div>
    );
  }
}

export default App;

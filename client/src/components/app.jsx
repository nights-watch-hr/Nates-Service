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
    return <div>Hello from React</div>;
  }
}

export default App;

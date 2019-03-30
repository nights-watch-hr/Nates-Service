import React, { Component } from 'react';
import TrackInfo from './mediaPlayerSubs/currentTrackInfo';
import Waveform from './mediaPlayerSubs/waveform';
import PlayerButtons from './mediaPlayerSubs/playerButtons';
import PopUpQueue from './popUpQueue';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: {
        id: 1,
        title: 'Riviera',
        version: 'Original Mix',
        artist: 'Kartell',
        album: 'Riviera',
        genre: 'Indie Dance / Nu Disco',
        label: 'Roche Musique',
        released: '2012-05-21',
        key: 'A min',
        bpm: 122,
        length: 327,
        price: 1.49,
        albumArt:
          'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
        waveform:
          'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Riviera-Kartell.svg',
        mp3:
          'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+Riviera.m4a'
      },
      songsInQueue: false,
      queueOpen: false
    };
  }

  render() {
    return (
      <div>
        {this.state.songsInQueue && this.state.queueOpen && <PopUpQueue />}
        {this.state.currentTrack && (
          <section id="player-container">
            <TrackInfo track={this.state.currentTrack} />
            <Waveform waveform={this.state.waveform} />
            <PlayerButtons />
          </section>
        )}
      </div>
    );
  }
}

export default MediaPlayer;

import React, { Component } from 'react';
import TrackInfo from './mediaPlayerSubs/currentTrackInfo';
import Waveform from './mediaPlayerSubs/waveform';
import PlayerButtons from './mediaPlayerSubs/playerButtons';
import PopUpQueue from './popUpQueue';
import style from '../../styles/mediaPlayer';

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
          'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Riviera-Kartell.jpg',
        waveform:
          'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Riviera-Kartell.svg',
        mp3:
          'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+Riviera.m4a'
      },
      queuedTracks: [
        {
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
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Riviera-Kartell.jpg',
          waveform:
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Riviera-Kartell.svg',
          mp3:
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/04+Riviera.m4a'
        }
      ],
      queueOpen: false
    };
  }

  render() {
    return (
      <div>
        {this.state.queuedTracks.length && this.state.queueOpen && (
          <PopUpQueue queuedTracks={this.state.queuedTracks} />
        )}
        {this.state.currentTrack && (
          <section className={style.fixed}>
            <TrackInfo track={this.state.currentTrack} />
            <Waveform track={this.state.currentTrack} />
            <PlayerButtons price={this.state.currentTrack.price} />
          </section>
        )}
      </div>
    );
  }
}

export default MediaPlayer;

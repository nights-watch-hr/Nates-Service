import React, { Component } from 'react';
import TrackInfo from './mediaPlayerSubs/currentTrackInfo';
import WaveformContainer from './mediaPlayerSubs/waveformContainer';
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
        },
        {
          id: 2,
          title: 'Last Call',
          version: 'Original Mix',
          artist: 'Kartell',
          album: 'Sapphire',
          genre: 'Indie Dance / Nu Disco',
          label: 'Roche Musique',
          released: '2014-01-06',
          key: 'D min',
          bpm: 130,
          length: 176,
          price: 1.49,
          albumArt:
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Sapphire-Kartell.jpg'
        },
        {
          id: 3,
          title: 'Espoir',
          version: 'Original Mix',
          artist: 'Darius',
          album: 'Romance EP',
          genre: 'Indie Dance / Nu Disco',
          label: 'Roche Musique',
          released: '2014-02-24',
          key: 'E♭ min',
          bpm: 143,
          length: 242,
          price: 1.49,
          albumArt:
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg'
        },
        {
          id: 4,
          title: 'Omeo',
          version: 'Original Mix',
          artist: 'Darius',
          album: 'Romance EP',
          genre: 'Indie Dance / Nu Disco',
          label: 'Roche Musique',
          released: '2014-02-24',
          key: 'D♭ maj',
          bpm: 112,
          length: 210,
          price: 1.49,
          albumArt:
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg'
        },
        {
          id: 5,
          title: 'Vanyll',
          version: 'Original Mix',
          artist: 'Darius',
          album: 'Romance EP',
          genre: 'Indie Dance / Nu Disco',
          label: 'Roche Musique',
          released: '2014-02-24',
          key: 'A min',
          bpm: 110,
          length: 240,
          price: 1.49,
          albumArt:
            'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg'
        }
      ],
      queueOpen: true,
      artworkEnlarged: false
    };
  }

  render() {
    return (
      <div>
        {this.state.queueOpen && (
          <PopUpQueue queuedTracks={this.state.queuedTracks} />
        )}
        {this.state.currentTrack && (
          <section className={style.fixed}>
            <TrackInfo
              track={this.state.currentTrack}
              queueOpen={this.state.queueOpen}
              artworkEnlarged={this.state.artworkEnlarged}
            />
            <WaveformContainer track={this.state.currentTrack} />
            <PlayerButtons price={this.state.currentTrack.price} />
          </section>
        )}
      </div>
    );
  }
}

export default MediaPlayer;

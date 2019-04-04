import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import CurrentTrackInfo from './mediaPlayerSubs/currentTrackInfo';
import WaveformContainer from './mediaPlayerSubs/waveformContainer';
import PlayerButtons from './mediaPlayerSubs/playerButtons';
import PopUpQueue from './popUpQueue';
import style from '../../styles/mediaPlayer';
import animation from '../../styles/animation';

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
      queueOpen: false,
      artworkEnlarged: true
    };
    this.expandQueue = this.expandQueue.bind(this);
    this.expandArtwork = this.expandArtwork.bind(this);
  }

  expandQueue(e) {
    e.preventDefault();
    this.state.queueOpen
      ? this.setState({ queueOpen: false })
      : this.setState({ queueOpen: true });
  }

  expandArtwork(e) {
    e.preventDefault();
    this.state.artworkEnlarged
      ? this.setState({ artworkEnlarged: false })
      : this.setState({ artworkEnlarged: true });
  }

  render() {
    return (
      <div>
        <CSSTransitionGroup
          transitionName={{
            enter: animation.queueEnter,
            enterActive: animation.queueEnterActive,
            leave: animation.queueLeave,
            leaveActive: animation.queueLeaveActive
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.queueOpen && (
            <PopUpQueue
              key="PopUpQueue"
              albumArt={this.state.currentTrack.albumArt}
              queuedTracks={this.state.queuedTracks}
              artworkEnlarged={this.state.artworkEnlarged}
            />
          )}
        </CSSTransitionGroup>
        {this.state.currentTrack && (
          <section className={style.fixed}>
            <CurrentTrackInfo
              track={this.state.currentTrack}
              queueOpen={this.state.queueOpen}
              artworkEnlarged={this.state.artworkEnlarged}
              expandArtwork={this.expandArtwork}
            />
            <WaveformContainer track={this.state.currentTrack} />
            <PlayerButtons
              price={this.state.currentTrack.price}
              queueOpen={this.state.queueOpen}
              expandQueue={this.expandQueue}
            />
          </section>
        )}
      </div>
    );
  }
}

export default MediaPlayer;

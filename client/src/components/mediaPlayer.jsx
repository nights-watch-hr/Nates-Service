import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import CurrentTrackInfo from './mediaPlayerSubs/currentTrackInfo';
import WaveformContainer from './mediaPlayerSubs/waveformContainer';
import PlayerButtons from './mediaPlayerSubs/playerButtons';
import PopUpQueue from './popUpQueue';
import style from '../../styles/mediaPlayer.scss';
import animation from '../../styles/animation.scss';
import axios from 'axios';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null,
      currentTrackIndex: 0,
      queuedTracks: [],
      playTime: 0,
      playState: null,
      queueOpen: false,
      queueOpenAnimation: null,
      artworkEnlarged: true,
      artworkEnlargedAnimation: null
    };
    this.getTrackToPlay = this.getTrackToPlay.bind(this);
    this.getTrackToQueue = this.getTrackToQueue.bind(this);
    this.checkDupes = this.checkDupes.bind(this);
    this.expandQueue = this.expandQueue.bind(this);
    this.expandArtwork = this.expandArtwork.bind(this);
    this.calculateLengthInMinutes = this.calculateLengthInMinutes.bind(this);
    this.applyFirstTrack = this.applyFirstTrack.bind(this);
    this.applyNewCurrentTrack = this.applyNewCurrentTrack.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.clearQueue = this.clearQueue.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.previousSong = this.previousSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.shortcutListener = this.shortcutListener.bind(this);
    this.trackTime = this.trackTime.bind(this);
    this.alterTime = this.alterTime.bind(this);
    this.checkSongEnd = this.checkSongEnd.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.currentTrack;
    this.timer;
    this.checkPlay;
    this.checkEnd;
  }

  componentDidMount() {
    this.applyFirstTrack();
    document.addEventListener('keydown', this.shortcutListener);
    document
      .getElementById('body')
      .addEventListener('click', this.getTrackToPlay);
    document
      .getElementById('body')
      .addEventListener('click', this.getTrackToQueue);
  }

  getTrackToPlay() {
    setTimeout(
      () =>
        axios
          .get('http://localhost:3737/api/trackToPlay')
          .then(response => {
            let { data } = response;
            let { queuedTracks } = this.state;
            this.currentTrack = data;
            if (data && !this.checkDupes(data)) {
              queuedTracks.push(data);
              this.setState(
                {
                  currentTrack: data,
                  currentTrackIndex: queuedTracks.length - 1,
                  queuedTracks,
                  playTime: 0
                },
                () => {
                  this.currentTrack.load();
                  this.playSong();
                }
              );
            } else if (data) {
              let trackIndex;
              for (let i = 0; i < queuedTracks.length; i++) {
                if (JSON.stringify(queuedTracks[i]) === JSON.stringify(data)) {
                  trackIndex = i;
                }
              }
              this.setState(
                {
                  currentTrack: data,
                  currentTrackIndex: trackIndex,
                  playTime: 0
                },
                () => {
                  this.currentTrack.load();
                  this.playSong();
                }
              );
            }
          })
          .catch(err => console.log(err)),
      300
    );
  }

  getTrackToQueue() {
    setTimeout(
      () =>
        axios
          .get('http://localhost:3737/api/trackToQueue')
          .then(response => {
            let { data } = response;
            if (data && !this.state.queuedTracks.length) {
              let { queuedTracks } = this.state;
              queuedTracks.push(data);
              this.setState({
                currentTrack: data,
                currentTrackIndex: 0,
                queuedTracks
              });
            } else if (data && !this.checkDupes(data)) {
              let { queuedTracks } = this.state;
              queuedTracks.push(data);
              this.setState({ queuedTracks });
            }
          })
          .catch(err => console.log(err)),
      300
    );
  }

  checkDupes(song) {
    let queue = this.state.queuedTracks;
    for (let i = 0; i < queue.length; i++) {
      if (JSON.stringify(song) === JSON.stringify(queue[i])) {
        return true;
      }
    }
    return false;
  }

  expandQueue(e) {
    e.preventDefault();
    this.state.queueOpen
      ? this.setState({ queueOpen: false })
      : this.setState({ queueOpen: true });
  }

  expandArtwork(e) {
    e.preventDefault();
    if (this.state.artworkEnlarged) {
      this.setState({
        artworkEnlarged: false,
        artworkEnlargedAnimation: 'hideArt'
      });
    } else {
      this.setState({
        artworkEnlarged: true,
        artworkEnlargedAnimation: 'showArt'
      });
    }
    setTimeout(() => this.setState({ artworkEnlargedAnimation: null }), 200);
  }

  calculateLengthInMinutes(songLength) {
    let minutes = Math.floor(songLength / 60);
    let seconds = songLength % 60;
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  applyFirstTrack() {
    if (this.state.queuedTracks.length) {
      let currentTrack = this.state.queuedTracks[0];
      clearInterval(this.timer);
      clearInterval(this.checkEnd);
      this.setState({ currentTrack, currentTrackIndex: 0, playTime: 0 }, () => {
        this.currentTrack.load();
      });
    }
  }

  applyNewCurrentTrack(e, index) {
    e.preventDefault();
    let currentTrack = this.state.queuedTracks[index];
    this.setState(
      { currentTrack, currentTrackIndex: index, playTime: 0 },
      () => {
        this.currentTrack.load();
        this.playSong();
      }
    );
  }

  removeFromQueue(e, index) {
    e.preventDefault();
    if (
      JSON.stringify(this.state.queuedTracks[index]) ===
        JSON.stringify(this.state.currentTrack) &&
      this.state.queuedTracks.length >= 1
    ) {
      let { queuedTracks } = this.state;
      queuedTracks.splice(index, 1);
      this.setState({ queuedTracks, playState: 'paused' }, () => {
        this.applyFirstTrack();
      });
    } else if (
      JSON.stringify(this.state.queuedTracks[index]) !==
      JSON.stringify(this.state.currentTrack)
    ) {
      let { queuedTracks } = this.state;
      queuedTracks.splice(index, 1);
      this.setState({ queuedTracks });
    } else if (this.state.queuedTracks.length === 1) {
      this.setState({ currentTrack: null, playState: null });
    }
  }

  clearQueue(e) {
    e.preventDefault();
    clearInterval(this.timer);
    clearInterval(this.checkEnd);
    this.setState({
      currentTrack: null,
      queuedTracks: []
    });
  }

  playSong() {
    clearInterval(this.timer);
    clearInterval(this.checkEnd);
    this.currentTrack
      .play()
      .then(() => {
        this.setState({ playState: 'playing' }, () => {
          this.timer = setInterval(this.trackTime, 300);
          this.checkEnd = setInterval(this.checkSongEnd, 1000);
        });
      })
      .catch(err => err);
  }

  pauseSong() {
    this.currentTrack.pause();
    clearInterval(this.timer);
    clearInterval(this.checkEnd);
    this.setState({ playState: 'paused' });
  }

  previousSong() {
    if (this.state.currentTrackIndex !== 0) {
      let previousTrackIndex = this.state.currentTrackIndex - 1;
      let currentTrack = this.state.queuedTracks[previousTrackIndex];
      this.setState(
        { currentTrack, currentTrackIndex: previousTrackIndex, playTime: 0 },
        () => {
          this.currentTrack.load();
          this.playSong();
        }
      );
    }
  }

  nextSong() {
    if (this.state.currentTrackIndex !== this.state.queuedTracks.length - 1) {
      let nextTrackIndex = this.state.currentTrackIndex + 1;
      let currentTrack = this.state.queuedTracks[nextTrackIndex];
      this.setState(
        { currentTrack, currentTrackIndex: nextTrackIndex, playTime: 0 },
        () => {
          this.currentTrack.load();
          this.playSong();
        }
      );
    }
  }

  shortcutListener(e) {
    if (e.code === 'Space') {
      if (
        (this.state.playState === null && this.state.currentTrack) ||
        this.state.playState === 'paused'
      ) {
        this.playSong();
      } else {
        this.pauseSong();
      }
    } else if (e.code === 'ArrowLeft') {
      if (this.state.currentTrackIndex !== 0) {
        this.previousSong();
      }
    } else if (e.code === 'ArrowRight') {
      if (this.state.currentTrackIndex !== this.state.queuedTracks.length - 1) {
        this.nextSong();
      }
    }
  }

  trackTime() {
    let playTime = this.state.playTime + 0.3;
    this.setState({ playTime });
  }

  alterTime(e) {
    let elemCoords = e.target.getBoundingClientRect();
    let percentTimeInTrack = (e.clientX - elemCoords.x) / elemCoords.width;
    let secondsTimeInTrack = Math.floor(
      percentTimeInTrack * this.state.currentTrack.length
    );
    this.setState(
      { playTime: secondsTimeInTrack },
      () => (this.currentTrack.currentTime = secondsTimeInTrack)
    );
  }

  checkSongEnd() {
    if (this.state.playTime > this.state.currentTrack.length) {
      if (this.state.currentTrackIndex === this.state.queuedTracks.length - 1) {
        clearInterval(this.timer);
        clearInterval(this.checkEnd);
        this.setState({ playState: 'paused', playTime: 0 });
      } else {
        this.nextSong();
      }
    }
  }

  adjustVolume(e) {
    this.currentTrack.volume = e.target.value / 100;
  }

  render() {
    if (this.state.queuedTracks.length) {
      return (
        <div>
          <CSSTransitionGroup
            transitionName={{
              enter: animation.queueEnter,
              enterActive: animation.queueEnterActive,
              leave: animation.queueLeave,
              leaveActive: animation.queueLeaveActive
            }}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {this.state.queueOpen && (
              <PopUpQueue
                albumArt={this.state.currentTrack.albumArt}
                queuedTracks={this.state.queuedTracks}
                currentTrackIndex={this.state.currentTrackIndex}
                artworkEnlarged={this.state.artworkEnlarged}
                artworkEnlargedAnimation={this.state.artworkEnlargedAnimation}
                expandQueue={this.expandQueue}
                applyNewCurrentTrack={this.applyNewCurrentTrack}
                removeFromQueue={this.removeFromQueue}
                clearQueue={this.clearQueue}
                calculateLengthInMinutes={this.calculateLengthInMinutes}
              />
            )}
          </CSSTransitionGroup>
          <audio
            volume="0.75"
            ref={currentTrack => {
              this.currentTrack = currentTrack;
            }}
          >
            <source src={this.state.currentTrack.mp3} />
          </audio>
          <section className={style.fixed}>
            <CurrentTrackInfo
              track={this.state.currentTrack}
              queueOpen={this.state.queueOpen}
              artworkEnlarged={this.state.artworkEnlarged}
              expandArtwork={this.expandArtwork}
            />
            <WaveformContainer
              track={this.state.currentTrack}
              playTime={this.state.playTime}
              alterTime={this.alterTime}
              calculateLengthInMinutes={this.calculateLengthInMinutes}
            />
            <PlayerButtons
              price={this.state.currentTrack.price}
              queueOpen={this.state.queueOpen}
              playState={this.state.playState}
              expandQueue={this.expandQueue}
              playSong={this.playSong}
              pauseSong={this.pauseSong}
              previousSong={this.previousSong}
              nextSong={this.nextSong}
              adjustVolume={this.adjustVolume}
            />
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MediaPlayer;

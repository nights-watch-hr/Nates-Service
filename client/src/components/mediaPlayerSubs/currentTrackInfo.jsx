import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import DownArrowInCircleIcon from '../../../icons/downArrowInCircleIcon';
import style from '../../../styles/currentTrackInfo';
import animation from '../../../styles/animation';

const TrackInfo = props => {
  return (
    <div className={style.trackInfoDiv}>
      <a key="artworkThumbnail" href={`localhost:3737?id=${props.track.id}`}>
        <CSSTransitionGroup
          transitionName={{
            enter: animation.artworkEnter,
            enterActive: animation.artworkEnterActive,
            leave: animation.artworkLeave,
            leaveActive: animation.artworkLeaveActive
          }}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {(!props.artworkEnlarged || !props.queueOpen) && (
            <img className={style.albumArt} src={props.track.albumArt} />
          )}
        </CSSTransitionGroup>
      </a>
      <CSSTransitionGroup
        transitionName={{
          enter: animation.toggleEnter,
          enterActive: animation.toggleEnterActive,
          leave: animation.toggleLeave,
          leaveActive: animation.toggleLeaveActive
        }}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        className={style.transitionGroup}
      >
        {props.queueOpen && (
          <div className={style.artworkToggle}>
            <a
              className={
                props.artworkEnlarged ? style.arrowDown : style.arrowUp
              }
              onClick={props.expandArtwork}
              href=""
            >
              <DownArrowInCircleIcon />
            </a>
          </div>
        )}
      </CSSTransitionGroup>
      <div
        className={props.queueOpen ? style.songInfoWithQueue : style.songInfo}
      >
        <span className={style.title}>
          <a href={`localhost:3737?id=${props.track.id}`}>
            <span>{props.track.title}</span>
            <span className={style.version}>{props.track.version}</span>
          </a>
        </span>
        <span className={style.artist}>{props.track.artist}</span>
      </div>
    </div>
  );
};

export default TrackInfo;

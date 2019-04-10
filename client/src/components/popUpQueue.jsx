import React from 'react';
import ClearQueue from './queueSubs/clearQueue';
import QueuedTrack from './queueSubs/queuedTrack';
import LargeArtwork from './queueSubs/largeArtwork';
import style from '../../styles/popUpQueue.scss';

const MediaPlayerWithQueue = props => {
  let conditionalArtworkStyling;

  if (props.artworkEnlarged && !props.artworkEnlargedAnimation) {
    conditionalArtworkStyling = style.queueContainerWithArtwork;
  } else if (!props.artworkEnlarged && !props.artworkEnlargedAnimation) {
    conditionalArtworkStyling = style.queueContainerNoArtwork;
  } else if (props.artworkEnlargedAnimation === 'hideArt') {
    conditionalArtworkStyling = style.hideArt;
  } else if (props.artworkEnlargedAnimation === 'showArt') {
    conditionalArtworkStyling = style.showArt;
  }

  return (
    <div>
      <div>
        <ClearQueue
          expandQueue={props.expandQueue}
          clearQueue={props.clearQueue}
        />
      </div>
      <div>
        <LargeArtwork
          albumArt={props.albumArt}
          artworkEnlarged={props.artworkEnlarged}
        />
      </div>
      <div className={conditionalArtworkStyling}>
        <ul id="tracks-in-queue-list">
          {props.queuedTracks.map((track, index) => (
            <QueuedTrack
              key={index}
              index={index}
              track={track}
              currentTrackIndex={props.currentTrackIndex}
              removeFromQueue={props.removeFromQueue}
              applyNewCurrentTrack={props.applyNewCurrentTrack}
              calculateLengthInMinutes={props.calculateLengthInMinutes}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MediaPlayerWithQueue;

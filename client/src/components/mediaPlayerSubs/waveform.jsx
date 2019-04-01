import React from 'react';

const Waveform = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="40.7vw"
    height="100"
    viewBox="0 27 1194 176"
    preserveAspectRatio="none"
  >
    <image href={props.svg} />
  </svg>
);

export default Waveform;

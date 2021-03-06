import React from 'react';

const Waveform = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="41.7vw"
    height="70"
    viewBox="0 -3 1194 190"
    preserveAspectRatio="none"
  >
    <image href={props.svg} />
  </svg>
);

export default Waveform;

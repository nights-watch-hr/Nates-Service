import React from 'react';

const Waveform = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="42vw"
    height="110"
    viewBox="0 27 1050 200"
    preserveAspectRatio="none"
  >
    <image href={props.svg} />
  </svg>
);

export default Waveform;

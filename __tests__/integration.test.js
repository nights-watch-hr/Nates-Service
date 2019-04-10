import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MediaPlayer from '../client/src/components/mediaPlayer';

const initialState = {
  currentTrack: null,
  currentTrackIndex: 0,
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
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Sapphire-Kartell.jpg',
      waveform:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Last_Call-Riviera.svg',
      mp3:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/07+Last+Call.m4a'
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
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
      waveform:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Espoir-Darius.svg',
      mp3:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/01+Espoir.m4a'
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
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
      waveform:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Omeo-Darius.svg',
      mp3:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/03+Omeo.m4a'
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
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/Album+Art/Romance_EP-Darius.jpg',
      waveform:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/SoundWaves/Vanyll-Darius.svg',
      mp3:
        'https://s3-us-west-1.amazonaws.com/airbnbeats/Database+Media/mp3s/05+Vanyll.m4a'
    }
  ],
  playTime: 0,
  playState: null,
  queueOpen: false,
  queueOpenAnimation: null,
  artworkEnlarged: true,
  artworkEnlargedAnimation: null
};

describe('<MediaPlayer />', () => {
  test('mediaPlayer render test', () => {
    const wrapper = mount(<MediaPlayer state={initialState} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});

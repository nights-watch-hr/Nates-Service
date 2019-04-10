import React from 'react';
import { shallow } from 'enzyme';

import PlayerButtons from '../client/src/components/mediaPlayerSubs/playerButtons';

describe('Render Test with Enzyme', () => {
  it('Component renders without crashing', () => {
    shallow(<PlayerButtons />);
  });
});

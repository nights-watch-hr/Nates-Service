import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MediaPlayer from '../../Media-Player/client/src/components/mediaPlayer';

describe('<MediaPlayer />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<MediaPlayer />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

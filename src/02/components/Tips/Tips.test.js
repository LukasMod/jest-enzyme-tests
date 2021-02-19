import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Tips from './Tips';

const defaultProps = {
  secretWord: 'train',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Tips {...setupProps} />);
};

it('should render without fail', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'guess-tips');
  expect(component.length).toBe(1);
});

it('should not throw warning with expected props', () => {
  checkProps(Tips, defaultProps);
});

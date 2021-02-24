import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';

import GiveUpMessage from './GiveUpMessage';

const defaultProps = { giveUp: true, secretWord: 'train' };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GiveUpMessage {...setupProps} />);
};

it('should not render any text when giveUp is false', () => {
  const wrapper = setup({ giveUp: false });
  const component = findByTestAttr(wrapper, 'component-give-up-message');
  expect(component.text()).toBe('');
});

it('should render non-empty text when giveUp is true', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-give-up-message');
  expect(component.text().length).not.toBe(0);
});
it('should render non-empty secretWord when giveUp is true', () => {
  const wrapper = setup();
  const component = findByTestAttr(
    wrapper,
    'component-give-up-message-secret-word'
  );
  expect(component.text().length).not.toBe(0);
});

it('should not throw warning with expected props', () => {
  checkProps(GiveUpMessage, defaultProps);
});

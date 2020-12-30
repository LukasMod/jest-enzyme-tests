import React from 'react';
import { findByTestAttr } from '../../../test/testUtils';
import Congrats from './Congrats';
import { shallow } from 'enzyme';

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it('should render without fail', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
it('should render no text when when prop `success` is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
it('should render `success` when prop `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

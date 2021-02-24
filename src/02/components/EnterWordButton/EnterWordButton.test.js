import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';

import EnterWordButton from './EnterWordButton';

const defaultProps = { guessCount: 0 };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordButton {...setupProps} />);
};

describe('guessedWord is not empty array', () => {
  it('should not render any text', () => {
    const wrapper = setup({ guessCount: 1 });
    const component = findByTestAttr(wrapper, 'component-enter-word');
    expect(component.text()).toBe('');
  });
});
describe('guessedWord is empty array', () => {
  it('should render a button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-enter-word-button');
    expect(component.length).toBe(1);
  });
  it('should call setUserEntering function after click', () => {
    const setUserEnteringMock = jest.fn();
    const wrapper = setup({ setUserEntering: setUserEnteringMock });
    const component = findByTestAttr(wrapper, 'component-enter-word-button');
    component.simulate('click');
    const setUserEnteringMockCount = setUserEnteringMock.mock.calls.length;
    expect(setUserEnteringMockCount).toBe(1);
  });
});

it('should not throw warning with expected props', () => {
  const expectedProps = { guessCount: 0, setUserEntering: () => {} };
  checkProps(EnterWordButton, expectedProps);
});

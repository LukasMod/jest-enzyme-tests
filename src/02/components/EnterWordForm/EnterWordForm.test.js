import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';

import EnterWordForm from './EnterWordForm';

const defaultProps = { setUserSecretWord: () => {} };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordForm {...setupProps} />);
};

describe('render', () => {
  it('should render form without an error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-enter-word-form');
    expect(component.length).toBe(1);
  });
  it('should render input without an error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-enter-word-input');
    expect(component.length).toBe(1);
  });
  it('should render button without an error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-enter-word-button');
    expect(component.length).toBe(1);
  });
  it('should not throw warning with defaultProps props', () => {
    checkProps(EnterWordForm, defaultProps);
  });
});
describe('submit click function', () => {
  let setUserSecretWordMock;
  let wrapper;
  const userSecretWord = 'train';

  beforeEach(() => {
    setUserSecretWordMock = jest.fn();
    wrapper = setup({ setUserSecretWord: setUserSecretWordMock });
    wrapper.setState({ userSecretWord: userSecretWord });
    const component = findByTestAttr(wrapper, 'component-enter-word-button');
    component.simulate('click', { preventDefault() {} });
  });

  it('should call `setUserSecretWord` once', () => {
    const setUserSecretWordMockCount = setUserSecretWordMock.mock.calls.length;
    expect(setUserSecretWordMockCount).toBe(1);
  });
  it('should call `setUserSecretWord` with input value as argument', () => {
    const setUserSecretWordArg = setUserSecretWordMock.mock.calls[0][0];
    expect(setUserSecretWordArg).toBe(userSecretWord);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import GiveUpButton from './GiveUpButton';

const defaultProps = {
  success: false,
  giveUp: false,
  giveUpGame: () => {},
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GiveUpButton {...setupProps} />);
};

describe('should not render button', () => {
  it('when `success` and `giveUp` is true', () => {
    const initialProps = {
      success: true,
      giveUp: true,
    };
    const wrapper = setup({ ...initialProps });
    const component = findByTestAttr(wrapper, 'component-give-up-button');
    expect(component.length).toBe(0);
  });
  it('when only `success` is true', () => {
    const initialProps = {
      success: true,
    };
    const wrapper = setup({ ...initialProps });
    const component = findByTestAttr(wrapper, 'component-give-up-button');
    expect(component.length).toBe(0);
  });
  it('when only `giveUp` is true', () => {
    const initialProps = {
      giveUp: true,
    };
    const wrapper = setup({ ...initialProps });
    const component = findByTestAttr(wrapper, 'component-give-up-button');
    expect(component.length).toBe(0);
  });
});

describe('should render button', () => {
  it('without an error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-give-up-button');
    expect(component.length).toBe(1);
  });
  it('without a warning', () => {
    checkProps(GiveUpButton, defaultProps);
  });
});

it('should call `giveUpGame` once after click', () => {
  const giveUpGameMock = jest.fn();
  const initialProps = {
    giveUpGame: giveUpGameMock,
  };
  const wrapper = setup({ ...initialProps });
  const component = findByTestAttr(wrapper, 'component-give-up-button');
  component.simulate('click');
  const giveUpGameMockCount = giveUpGameMock.mock.calls.length;
  expect(giveUpGameMockCount).toBe(1);
});

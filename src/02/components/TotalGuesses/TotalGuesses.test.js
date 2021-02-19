import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';
import TotalGuesses from './TotalGuesses';

const defaultProps = { guessCount: 1 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

describe('TotalGuesses', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('should render without an error', () => {
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.length).toBe(1);
  });
  it('should not throw warning with expected props', () => {
    checkProps(wrapper, defaultProps);
  });
  it('should render the number of guesses', () => {
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.text()).toContain(defaultProps.guessCount.toString());
  });
});

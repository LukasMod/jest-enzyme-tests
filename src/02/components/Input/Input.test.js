import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';

import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @param {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    it('should render component without error', () => {});
    it('should render input box', () => {});
    it('should render submit button', () => {});
  });

  describe('word has been guessed', () => {
    it('should not render component without error', () => {});
    it('should not render input box', () => {});
    it('should not render submit button', () => {});
  });
});

describe('update state', () => {});

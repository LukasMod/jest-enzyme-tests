import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});
it('should starts counter at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});
describe('increment button', () => {
  it('should render button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });
  it('should increment counter display after click', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});
describe('decrement button', () => {
  it('should decrement counter display after click', () => {
    const wrapper = setup();
    const buttonIncrement = findByTestAttr(wrapper, 'increment-button');
    buttonIncrement.simulate('click');
    const buttonDecrement = findByTestAttr(wrapper, 'decrement-button');
    buttonDecrement.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
  it('should not let set counter below 0', () => {
    const wrapper = setup();
    const buttonDecrement = findByTestAttr(wrapper, 'decrement-button');
    buttonDecrement.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});
describe('error message', () => {
  const wrapper = setup();
  const buttonDecrement = findByTestAttr(wrapper, 'decrement-button');
  buttonDecrement.simulate('click');
  it('should display error after trying set counter below 0', () => {
    const errorMessage = findByTestAttr(wrapper, 'error-message');
    expect(errorMessage.length).toBe(1);
  });
  it('should clear error message after set counter above 0', () => {
    const buttonIncrement = findByTestAttr(wrapper, 'increment-button');
    buttonIncrement.simulate('click');
    const errorMessage = findByTestAttr(wrapper, 'error-message');
    expect(errorMessage.length).toBe(0);
  });
});

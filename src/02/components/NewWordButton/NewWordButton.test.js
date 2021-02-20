import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';

import NewWordButton from './NewWordButton';

describe('word was not guessed', () => {
  it('should not render any text', () => {
    const props = {
      success: false,
    };
    const wrapper = shallow(<NewWordButton props={props} />);
    const component = findByTestAttr(wrapper, 'component-new-word');
    expect(component.text()).toBe('');
  });
});

describe('word was guessed', () => {
  let resetActionMock;
  let wrapper;
  beforeEach(() => {
    resetActionMock = jest.fn();
    const props = {
      success: true,
      resetAction: resetActionMock,
    };
    wrapper = shallow(<NewWordButton {...props} />);
  });

  it('should render `New Word` button', () => {
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.length).toBe(1);
  });
  it('should not throw warning with expected props', () => {
    const expectedProps = { success: true, resetAction: () => {} };
    checkProps(NewWordButton, expectedProps);
  });
  it('should call `resetAction` prop upon button click', () => {
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    component.simulate('click');
    const resetActionCallCount = resetActionMock.mock.calls.length;
    expect(resetActionCallCount).toBe(1);
  });
});

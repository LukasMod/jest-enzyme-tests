import React from 'react';
import { findByTestAttr } from '../../../test/testUtils';
import ServerError from './ServerError';
import { shallow } from 'enzyme';

describe('should render', () => {
  const wrapper = shallow(<ServerError />);
  const component = findByTestAttr(wrapper, 'component-server-error');
  it('without fail', () => {
    expect(component.length).toBe(1);
  });
  it('non-empty text', () => {
    expect(component.text().length).not.toBe(0);
  });
});

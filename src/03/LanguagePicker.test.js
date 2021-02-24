import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import LanguagePicker from './LanguagePicker';
import propTypes from 'prop-types';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.length).toBe(1);
});
it('does not throw warning with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});
it('renders non-zero language-icons', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');
  expect(languageIcons.length).toBeGreaterThan(0);
});

it('calls setLanguage prop upon click', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');

  const firstIcon = languageIcons.first();
  firstIcon.simulate('click');

  expect(mockSetLanguage).toHaveBeenCalled();
});

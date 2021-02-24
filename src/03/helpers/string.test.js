import stringModule from './strings';

const { getStringByLanguage } = stringModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
};

it('should returns correct submit string for english', () => {
  const string = getStringByLanguage('en', 'submit', strings);
  expect(string).toBe('submit');
});
it('should returns correct submit string for emoji', () => {
  const string = getStringByLanguage('emoji', 'submit', strings);
  expect(string).toBe('🚀');
});
it('should returns english submit string when language does not exists', () => {
  const string = getStringByLanguage('notALanguage', 'submit', strings);
  expect(string).toBe('submit');
});
it('should returns english submit string when submit key does not exists', () => {
  const string = getStringByLanguage('mermish', 'submit', strings);
  expect(string).toBe('submit');
});

import moxios from 'moxios';

import actions from './hookActions';

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should call the getSecretWord callback on axios response', async () => {
    const secretWord = 'party';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    //create mock for callback arg
    const mockSetSecretWord = jest.fn();
    await actions.getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});

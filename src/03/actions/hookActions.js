import axios from 'axios';

const getSecretWord = async (setSecretWord) => {
  const response = await axios.get(
    'https://random-word-api.herokuapp.com/word?number=1'
  );
  setSecretWord(response.data[0]);
};

//default export for mocking convenience
const actions = { getSecretWord };
export default actions;

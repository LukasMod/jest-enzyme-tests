import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Congrats,
  GuessedWords,
  Input,
  Tips,
  TotalGuesses,
  NewWordButton,
} from './components';
import { getSecretWord, resetGame } from './actions';

import './App.css';

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto The Game</h1>
        <Tips secretWord={this.props.secretWord} />
        <Congrats success={this.props.success} />
        <NewWordButton
          success={this.props.success}
          resetAction={this.props.resetGame}
        />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses guessCount={this.props.guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: () => {
      dispatch(getSecretWord());
    },
    resetGame: () => {
      dispatch(resetGame());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);

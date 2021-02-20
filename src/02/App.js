import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Congrats,
  GuessedWords,
  Input,
  Tips,
  TotalGuesses,
  NewWordButton,
  GiveUpButton,
  GiveUpMessage,
} from './components';
import { getSecretWord, resetGame, giveUpGame } from './actions';

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
        <GiveUpMessage
          secretWord={this.props.secretWord}
          giveUp={this.props.giveUp}
        />
        <NewWordButton
          success={this.props.success}
          resetAction={this.props.resetGame}
          giveUp={this.props.giveUp}
        />
        <Input giveUp={this.props.giveUp} />
        <GiveUpButton
          success={this.props.success}
          giveUp={this.props.giveUp}
          giveUpGame={this.props.giveUpGame}
        />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses guessCount={this.props.guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords, giveUp }) => {
  return { success, secretWord, guessedWords, giveUp };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: () => {
      dispatch(getSecretWord());
    },
    resetGame: () => {
      dispatch(resetGame());
    },
    giveUpGame: () => {
      dispatch(giveUpGame());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);

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
  EnterWordButton,
  EnterWordForm,
  ServerError,
} from './components';
import {
  getSecretWord,
  resetGame,
  giveUpGame,
  setUserEntering,
  setUserSecretWord,
  setServerError,
} from './actions';

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
    let contents;
    if (this.props.serverError) {
      contents = <ServerError />;
    } else if (this.props.userEnter === 'inProgress') {
      contents = (
        <EnterWordForm setUserSecretWord={this.props.setUserSecretWord} />
      );
    } else {
      contents = (
        <>
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
          <EnterWordButton
            guessCount={this.props.guessedWords.length}
            giveUp={this.props.giveUp}
            giveUpGame={this.props.giveUpGame}
            setUserEntering={this.props.setUserEntering}
          />
        </>
      );
    }
    return (
      <div
        data-test="component-app"
        className="container mx-auto"
        style={{ width: '300px' }}>
        <h1>Jotto The Game</h1>
        {contents}
      </div>
    );
  }
}

const mapStateToProps = ({
  success,
  secretWord,
  guessedWords,
  giveUp,
  userEnter,
  serverError,
}) => {
  return { success, secretWord, guessedWords, giveUp, userEnter, serverError };
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
    setUserEntering: () => {
      dispatch(setUserEntering());
    },
    setUserSecretWord: (userSecretWord) => {
      dispatch(setUserSecretWord(userSecretWord));
    },
    setServerError: () => {
      dispatch(setServerError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);

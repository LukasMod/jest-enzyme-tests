import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Congrats, GuessedWords, Input } from './components';
import { getSecretWord } from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto The Game</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EnterWordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userSecretWord: '' };
    this.submitUserSecretWord = this.submitUserSecretWord.bind(this);
  }

  submitUserSecretWord(event) {
    event.preventDefault();
    this.props.setUserSecretWord(this.state.userSecretWord);
  }

  render() {
    return (
      <form data-test="component-enter-word-form" className="form-inline">
        <input
          data-test="component-enter-word-input"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter secret word"
          value={this.state.userSecretWord}
          onChange={(event) =>
            this.setState({ userSecretWord: event.target.value })
          }
        />
        <button
          data-test="component-enter-word-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(event) => this.submitUserSecretWord(event)}>
          Start!
        </button>
      </form>
    );
  }
}

EnterWordForm.propTypes = {
  setUserSecretWord: PropTypes.func,
};

export default EnterWordForm;

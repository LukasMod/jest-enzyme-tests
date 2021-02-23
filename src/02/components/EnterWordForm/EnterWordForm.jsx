import React, { Component } from 'react';

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
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter secret word"
          value={this.state.userSecretWord}
          onChange={(event) =>
            this.setState({ userSecretWord: event.target.value })
          }
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(event) => this.submitUserSecretWord(event)}>
          Start!
        </button>
      </form>
    );
  }
}

export default EnterWordForm;

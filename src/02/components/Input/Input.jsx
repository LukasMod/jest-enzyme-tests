import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';
export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.state = { currentGuess: '', giveUpActive: false };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.giveUpActive !== props.giveUp) {
      return {
        giveUpActive: props.giveUp,
        currentGuess: '',
      };
    }
    return null;
  }

  render() {
    const contents =
      this.props.success || this.props.giveUp ? null : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 p-2"
            type="text"
            placeholder="enter guess"
            value={this.state.currentGuess}
            onChange={(event) =>
              this.setState({ currentGuess: event.target.value })
            }
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={(event) => this.submitGuessedWord(event)}>
            Submit
          </button>
        </form>
      );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success, giveUp }) => {
  return { success, giveUp };
};

const mapDispatchToProps = (dispatch) => {
  return {
    guessWord: (word) => {
      dispatch(guessWord(word));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);

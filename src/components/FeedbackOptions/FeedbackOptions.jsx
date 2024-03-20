import PropTypes from "prop-types";
import { Component } from "react";
import style from "./FeedbackOptions.module.css";

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={style.buttonsContainer}>
        {this.props.options.map((option) => {
          return (
            <button
              className={style.button}
              type="button"
              key={option}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

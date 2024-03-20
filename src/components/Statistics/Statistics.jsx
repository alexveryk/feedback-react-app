import { Component } from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

export class Statistics extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.props;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <div className={style.statistics}>
        <h2 className={style.title}>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
            <table className={style.table}>
              <thead className={style.thead}>
                <tr className={style.tableHeaderRow}>
                  <th className={style.tableHeaderCell}>Feedback Type</th>
                  <th className={style.tableHeaderCell}>Rating</th>
                </tr>
              </thead>
              <tbody className={style.tableBodyRow}>
                <tr className={style.tableRow}>
                  <td className={style.tableBodyCell}>Good:</td>
                  <td className={style.tableBodyCell}>{this.props.good}</td>
                </tr>
                <tr className={style.tableRow}>
                  <td className={style.tableBodyCell}>Neutral: </td>
                  <td className={style.tableBodyCell}>{this.props.neutral}</td>
                </tr>
                <tr className={style.tableRow}>
                  <td className={style.tableBodyCell}>Bad:</td>
                  <td className={style.tableBodyCell}>{this.props.bad}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className={style.tableFooterCell}>Total:</td>
                  <td className={style.tableFooterCell}>
                    {this.countTotalFeedback()}
                  </td>
                </tr>
                <tr>
                  <td className={style.tableFooterCell}>Positive feedback:</td>
                  <td className={style.tableFooterCell}>
                    {this.countPositiveFeedbackPercentage()}%
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

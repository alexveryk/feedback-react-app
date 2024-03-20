import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

export class Section extends Component {
  render() {
    return (
      <div className={styles.section}>
        <h1 className={styles.title}>Please leave feedback</h1>
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node,
};

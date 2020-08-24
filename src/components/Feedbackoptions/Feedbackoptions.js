import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <Fragment>{
      keys.map(key => <button className={styles.feedbackbtn} key={key} type="button" value={key} onClick={onLeaveFeedback}>{key}</button>)}
    </Fragment>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}


export default FeedbackOptions;
import React, { Fragment } from 'react';
import styles from './Feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <Fragment>{
      keys.map(key => <button className={styles.feedbackbtn} key={key} type="button" value={key} onClick={onLeaveFeedback}>{key}</button>)}
    </Fragment>
  )
}

export default FeedbackOptions;
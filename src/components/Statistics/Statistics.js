import React from 'react';
import styles from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <span className={styles.good}> Good: {good} </span>
    <span className={styles.neutral}> Neutral: {neutral} </span>
    <span className={styles.bad}> Bad: {bad} </span>
    <span className={styles.total}> Total: {total} </span>
    <span className={styles.percentage}> Positive: {positivePercentage}% </span>
  </div>
)

export default Statistics;
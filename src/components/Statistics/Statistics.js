import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.statistics}>
    <span className={s.good}> Good: {good} </span>
    <span className={s.neutral}> Neutral: {neutral} </span>
    <span className={s.bad}> Bad: {bad} </span>
    <span className={s.total}> Total: {total} </span>
    <span className={s.percentage}> Positive: {positivePercentage}% </span>
  </div>
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
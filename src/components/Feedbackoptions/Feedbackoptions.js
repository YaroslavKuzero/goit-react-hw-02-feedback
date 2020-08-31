import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <>
      {
        keys.map(key =>
          <button className={s.feedbackbtn}
            key={key}
            type="button"
            value={key}
            onClick={onLeaveFeedback}>{key}
          </button>)
      }
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
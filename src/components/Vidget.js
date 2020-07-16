import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedbackoptions/Feedbackoptions';
import SectionHeader from './SectionHeader/SectionHeader';
import Notification from './Notification/Notification';
import '../css/body.css';

class Vidget extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad

    return totalFeedback
  }

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.floor(100 / this.countTotalFeedback() * this.state.good)
    return positivePercentage
  }

  LeaveFeedback = (event) => {
    const { value } = event.target
    this.setState(prevState => (
      { [value]: prevState[value] + 1 }
    ))
  }

  render() {
    return (
      <div>
        <SectionHeader title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.LeaveFeedback}
          />
        </SectionHeader>

        <SectionHeader title='Statistics'>
          {
            this.countTotalFeedback() > 0 ?
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              /> :
              <Notification
                title='No feedback given'
              />
          }
        </SectionHeader>
      </div>
    )
  }
}


export default Vidget;

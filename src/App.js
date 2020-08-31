import React, { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/Feedbackoptions/Feedbackoptions';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Notification from './components/Notification/Notification';

import './css/body.css';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state
    return (good + neutral + bad)
  }

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.floor(100 / this.countTotalFeedback() * this.state.good)
    return positivePercentage
  }

  LeaveFeedback = (e) => {
    const { value } = e.target
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
              <Statistics {...this.state}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              /> : <Notification title='No feedback given' />
          }
        </SectionHeader>
      </div>
    )
  }
}


export default App;

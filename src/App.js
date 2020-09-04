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
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.floor(100 / this.countTotalFeedback() * this.state.good)
  }

  LeaveFeedback = ({ target }) => {
    const { value } = target
    this.setState(prevState => (
      { [value]: prevState[value] + 1 }
    ))
  }

  render() {
    const isShowStat = this.countTotalFeedback() > 0
    return (
      <>
        <SectionHeader title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.LeaveFeedback}
          />
        </SectionHeader>

        <SectionHeader title='Statistics'>
          {
            isShowStat ?
              <Statistics {...this.state}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              /> : <Notification title='No feedback given' />
          }
        </SectionHeader>
      </>
    )
  }
}


export default App;

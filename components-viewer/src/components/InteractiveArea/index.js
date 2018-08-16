import React from 'react'

import { Header } from './components/Header'
import { QuestionRenderer } from './components/QuestionRenderer'
import { Button } from './components/Button'

import './style.css'

export class InteractiveArea extends React.Component {
  render() {
    const { duration, remainingSeconds, questionIndex, questionCount, question } = this.props
    return (
      <div className="viewer__interaction">
        <Header
          duration={duration}
          remainingSeconds={remainingSeconds}
          questionIndex={questionIndex}
          questionCount={questionCount}
          label={question.label}
        />
        <QuestionRenderer question={question}/>
        <div className="viewer__interaction__nav">
          <Button onClick={this.props.validateAnswer}>
            <p>Valider</p>
          </Button>
        </div>
      </div>
    )
  }
}

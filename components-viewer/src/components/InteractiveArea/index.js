import React from 'react'
import PropTypes from 'prop-types';

import { QuestionRenderer } from './components/QuestionRenderer'
import { Button } from './components/Button'

import './style.css'

export class InteractiveArea extends React.Component {
  render() {
    const { question } = this.props
    return (
      <React.Fragment>
        <QuestionRenderer question={question}/>
        <div className="viewer__interaction__nav">
          <Button onClick={this.props.validateAnswer}>
            <p>Valider</p>
          </Button>
        </div>
      </React.Fragment>
    )
  }
}

InteractiveArea.propTypes = {
    validateAnswer: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired
};

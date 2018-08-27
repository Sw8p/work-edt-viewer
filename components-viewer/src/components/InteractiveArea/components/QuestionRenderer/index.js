import React from 'react'
import PropTypes from 'prop-types';

import { BlankText } from './components/BlankText';
import { Maq } from './components/Maq';
import { Saq } from './components/Saq';
import { SignSort } from './components/SignSort';
import { Slider } from './components/Slider';
import { Unknown } from './components/Unknown';


import './style.css'

export class QuestionRenderer extends React.Component {
  getQuestionComponent = () => {
        const { question } = this.props;

        switch (question.type) {
            case 'blanktext':
                return BlankText;
            case 'maq':
                return Maq;
            case 'saq':
                return Saq;
            case 'signsort':
                return SignSort;
            case 'slider':
                return Slider;
            default:
                return Unknown;
        }
  };

  render(){
    const { question } = this.props;
    const QuestionComponent = this.getQuestionComponent();

    return (
      <div className="viewer__interaction__answers">
        <p className="info viewer__interaction__answers__instruction">
          {QuestionComponent.instruction}
        </p>
        <QuestionComponent data={question.values}/>
      </div>
    )
  }
}

QuestionRenderer.propTypes = {
    question: PropTypes.object.isRequired
};

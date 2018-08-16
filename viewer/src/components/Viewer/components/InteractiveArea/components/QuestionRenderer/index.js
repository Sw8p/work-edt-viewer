import React from 'react';
import PropTypes from 'prop-types';

import { BlankText } from './components/BlankText';
import { Maq } from './components/Maq';
import { Saq } from './components/Saq';
import { SignSort } from './components/SignSort';
import { Slider } from './components/Slider';
import { Unknown } from './components/Unknown';

import './style.css';

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

    render() {
        const QuestionComponent = this.getQuestionComponent();

        return (
            <React.Fragment>
                <p className="info">{QuestionComponent.instruction}</p>
                <QuestionComponent data={this.props.question} />
            </React.Fragment>
        );
    }
}

QuestionRenderer.propTypes = {
    question: PropTypes.object.isRequired
};

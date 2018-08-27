import React from 'react'

import { printDuration } from './utils';

import './style.css'

export class Header extends React.Component {
  renderWidthGauge = () => {
    const { remainingSeconds, duration } = this.props;
    /* duration = durée quiz
    remainingSeconds = temps restant */
    const progression = remainingSeconds / duration * 100;

    return (100 - progression);
  }

  renderDurationGauge = () => {
      const { remainingSeconds } = this.props;

      return (
        printDuration(remainingSeconds * 1000)
      );
  };

  render() {
    const { questionIndex, questionCount, label } = this.props;
    const questionProgression = (questionIndex + 1) / questionCount * 100;

    return (
      <div className="viewer__interaction__header">
        <p className="viewer__interaction__header__number">
            Question n° <strong>
              {questionIndex + 1}/{questionCount}
            </strong> :
          </p>
          <h2>
              {label}
          </h2>
          <div className="viewer__interaction__header__time" style={{width: this.renderWidthGauge()+'%'}}>
            <span className="viewer__interaction__header__time__bubble">
              <p>{this.renderDurationGauge()}</p>
            </span>
          </div>
      </div>
    )
  }
}

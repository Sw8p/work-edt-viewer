import React from 'react'

import { printDuration } from './utils';

import './style.css'

export class Header extends React.Component {
  renderDurationGauge = () => {
      const { remainingSeconds, duration } = this.props;
      const progression = remainingSeconds / duration * 100;

      return (
        printDuration(remainingSeconds * 1000)
      );
  };

  render() {
    const { questionIndex, questionCount } = this.props
    return (
      <div className="viewer__interaction__header">
        <p className="viewer__interaction__header__number">
            Question n° <strong>37/200</strong> :
          </p>
          <h2>
              À quelle(s) répercution(s) peut-on être
              confronté si on s’arrête dans cette rue ?
          </h2>
          <div className="viewer__interaction__header__time">
            <span className="viewer__interaction__header__time__bubble">
              <p>{this.renderDurationGauge()}</p>
            </span>
          </div>
      </div>
    )
  }
}

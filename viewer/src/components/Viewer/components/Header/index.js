import React from 'react';
import PropTypes from 'prop-types';

import { printDuration } from './utils';

import './style.css';

export class Header extends React.PureComponent {
    renderDurationGauge = () => {
        const { remainingSeconds, duration } = this.props;
        const progression = remainingSeconds / duration * 100;

        return (
            <span
                className="viewer__header__time__gauge"
                style={{ width: `${progression}%` }}
            >
                <p className="viewer__header__time__text">
                    Temps restant: <strong>
                        {printDuration(remainingSeconds * 1000)}
                    </strong>
                </p>
            </span>
        );
    };

    render() {
        const { questionIndex, questionCount } = this.props;
        const questionProgression = (questionIndex + 1) / questionCount * 100;

        return (
            <header className="viewer__header">
                <div className="viewer__header__number">
                    <span
                        className="viewer__header__number__gauge"
                        style={{ width: `${questionProgression}%` }}
                    >
                        <p className="viewer__header__number__text">
                            Question n° <strong>
                                {questionIndex + 1}/{questionCount}
                            </strong>
                        </p>
                    </span>
                </div>
                <div className="viewer__header__time">
                    {this.renderDurationGauge()}
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    duration: PropTypes.number.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
    questionIndex: PropTypes.number.isRequired,
    questionCount: PropTypes.number.isRequired
};

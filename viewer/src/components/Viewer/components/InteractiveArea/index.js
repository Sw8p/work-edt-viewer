import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button';
import { MediaRenderer } from './components/MediaRenderer';
import { QuestionRenderer } from './components/QuestionRenderer';

import './style.css';

export class InteractiveArea extends React.Component {
    render() {
        const { question } = this.props;
        const { label, media } = question;

        return (
            <main className="viewer__main">
                {media && <MediaRenderer media={media} />}
                <div className="viewer__main__interaction">
                    <h2>{label}</h2>
                    <div className="viewer__main__interaction__answers">
                        <QuestionRenderer question={question} />
                    </div>
                    <div className="viewer__main__interaction__nav">
                        <Button onClick={this.props.validateAnswer}>
                            <p>Valider</p>
                        </Button>
                    </div>
                </div>
            </main>
        );
    }
}

InteractiveArea.propTypes = {
    validateAnswer: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired
};

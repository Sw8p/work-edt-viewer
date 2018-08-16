import React from 'react';
import { connect } from 'react-redux';
import { routeNode } from 'react-router5';

import { Header } from './components/Header';
import { InteractiveArea } from './components/InteractiveArea';
import { PopupTimeElapsed } from './components/PopupTimeElapsed';

//import selectors from 'selectors';
//import actions from 'actions';

import './style.css';

export class Viewer extends React.Component {
    state = {
        remainingSeconds: 600,
        questionIndex:  0
    };

    componentDidMount() {
        const { route } = this.props;
        const { questionIndex } = this.state;

        if (questionIndex === 0) {
            this.timer = setInterval(() => {
                this.setState(
                    ({ remainingSeconds }) => ({
                        remainingSeconds: remainingSeconds - 1
                    }),
                    this.checkElapsedTime
                );
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    checkElapsedTime = () => {
        if (this.state.remainingSeconds === 0) {
            clearInterval(this.timer);

            //this.props.showPopup({
            //    name: 'CardPopup',
            //    cancelable: false,
            //    props: {
            //        component: PopupTimeElapsed
            //    }
            //});
        }
    };

    handleValidateAnswer = () => {
        const { exam, route, router } = this.props;
        const currentIndex = route.params.questionIndex;
        const maxIndex = exam.content.length - 1;

        const nextIndex = currentIndex + 1;

        if (nextIndex > maxIndex) {
            return router.navigate('exam.results');
        }

        router.navigate('exam.viewer', {
            questionIndex: nextIndex
        });
    };

    render() {
        const { route, exam, currentQuestion } = this.props;
        const { questionIndex } = route.params;

        return (
            <div className="viewer">
                <Header
                    duration={exam.duration}
                    remainingSeconds={this.state.remainingSeconds}
                    questionIndex={questionIndex}
                    questionCount={exam.content.length}
                />
                <InteractiveArea
                    question={currentQuestion}
                    validateAnswer={this.handleValidateAnswer}
                />
            </div>
        );
    }
}

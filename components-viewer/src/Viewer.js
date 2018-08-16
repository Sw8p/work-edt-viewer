import React, { Component } from 'react';

import { MediaRenderer } from './components/MediaRenderer'
import { InteractiveArea } from './components/InteractiveArea'

import './viewer.css'

class Viewer extends Component {
  state = {
    remainingSeconds: this.props.exam.duration,
    questionIndex: 0
  }

  //Timer & check
  componentDidMount() {
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
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  checkElapsedTime = () => {
    if (this.state.remainingSeconds === 0) {
        clearInterval(this.timer);

        alert("Game over...");
    }
  }

  handleValidateAnswer = () => {
    const { exam } = this.props;
    const currentIndex = this.state.questionIndex;
    const maxIndex = exam.content.length - 1;

    const nextIndex = currentIndex + 1;

    if (nextIndex > maxIndex) {
        return alert("End exam !")
    }

    this.setState({
        questionIndex: nextIndex
    });
  }

  render() {
    const { exam } = this.props;
    const { questionIndex } = this.state;
    const currentQuestion = questionIndex;

    return (
      <div className="viewer">
          <MediaRenderer
              src={exam.content.media}
          />
          <InteractiveArea
              question={currentQuestion}
              validateAnswer={this.handleValidateAnswer}
              duration={exam.duration}
              remainingSeconds={this.state.remainingSeconds}
              questionIndex={questionIndex}
              questionCount={exam.content.length}
          />
      </div>
    );
  }
}

export default Viewer;
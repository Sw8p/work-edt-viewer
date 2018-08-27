import React, { Component } from 'react';
/*........................route & redux........................*/

import { MediaRenderer } from './components/MediaRenderer'
import { InteractiveArea } from './components/InteractiveArea'
/*........................POPUP........................*/

import selectors from './selectors'
/*........................ACTIONS........................*/

import './viewer.css'

class Viewer extends Component {
  state = {
    remainingSeconds: this.props.exam.duration,
    questionIndex: 0
  }


  //Timer & check
  componentDidMount() {
    /*........................ROUTE - questionIndex........................*/
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

        /*........................POPUP........................*/
        alert("Game over...");
    }
  }

  handleValidateAnswer = () => {
    /*........................ROUTE........................*/
    const { exam } = this.props;
    const currentIndex = this.state.questionIndex;
    const maxIndex = exam.content.length - 1;

    const nextIndex = currentIndex + 1;

    if (nextIndex > maxIndex) {
      /*........................RESULT........................*/
        return alert("End exam !")
    }

    this.setState({
        questionIndex: nextIndex
    });
  }

  render() {
    /*........................ROUTE........................*/
    const { exam } = this.props;
    const { questionIndex } = this.state;
    const currentQuestion = selectors.getQuestionContent(this.props, questionIndex);
    let mediaRenderer = null;
    if(currentQuestion.media){
      mediaRenderer = <MediaRenderer
          media={currentQuestion.media}
      />
    }
    /*........................ return
    Media
    InteractiveArea
    ........................*/
    return (
      <div className="viewer">
          {mediaRenderer}
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

import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { routeNode } from 'react-router5';

import { MediaRenderer } from './components/MediaRenderer'
import { Header } from './components/Header'
import { InteractiveArea } from './components/InteractiveArea'
//import { PopupTimeElapsed } from './components/PopupTimeElapsed';

import selectors from './selectors'
//import selectors from 'selectors';
//import actions from 'actions';

import './viewer.css'
//import './style.css'

class Viewer extends Component {
  state = {
    started: false,
    remainingSeconds: this.props.exam.duration,
    questionIndex: 0
  }

  /*componentDidMount() {
    const { started } = this.state;
    //const { route, exam, startReqStatus, startExam } = this.props;
    const { questionIndex } = this.state;
    //const { questionIndex } = route.params;

    if (questionIndex === 0 && !started) {
      //startExam({ id: exam._id });
    }
  }*/

  componentDidMount() {
  //componentDidUpdate() {
    const { started } = this.state;
    //const { route, startReqStatus } = this.props;
    const { questionIndex } = this.state;
    //const { questionIndex } = route.params;

    if (
        !started &&
        questionIndex === 0 /*&&
        !startReqStatus.pending &&
        startReqStatus.success*/
    ) {
        this.timer = setInterval(() => {
            this.setState(
                ({ remainingSeconds }) => ({
                    remainingSeconds: remainingSeconds - 1
                }),
                this.checkElapsedTime
            );
        }, 1000);

        this.setState({ started: true });
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  checkElapsedTime = () => {
    if (this.state.remainingSeconds === 0) {
        clearInterval(this.timer);

        /*........................POPUP........................*/
        //this.props.showPopup({
        //    name: 'CardPopup',
        //    cancelable: false,
        //    props: {
        //        component: PopupTimeElapsed
        //    }
        //});
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
    const media = currentQuestion.media;
    //let mediaRenderer = null;
    //if(currentQuestion.media){
    //  mediaRenderer = <MediaRenderer
    //      media={currentQuestion.media}
    //  />
    //}

    return (
      <div className="viewer">
          {media && <MediaRenderer media={media} />}
          <div className="viewer__interaction">
            <Header
              duration={exam.duration}
              remainingSeconds={this.state.remainingSeconds}
              questionIndex={questionIndex}
              questionCount={exam.content.lenght}
              label={currentQuestion.label}
            />

            <InteractiveArea
              question={currentQuestion}
              validateAnswer={this.handleValidateAnswer}
            />
          </div>
      </div>
    );
  }
}

export default Viewer;

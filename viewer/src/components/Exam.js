import React from 'react';
import { routeNode } from 'react-router5';

import { Viewer } from './Viewer';
import { Results } from './Results';

const Exam = props => {
    const { route } = props;
    const { name } = route;

    const exam = {
      content: Array(10).fill(4),
      duration: 600
    }

    switch (name) {
        case 'exam.viewer':
            return <Viewer exam={exam} />;
        case 'exam.results':
            return <Results {...props} />;
        default :
            return (<div>Hello default switch!</div>)
    }
};

const RNExam = routeNode('exam')(Exam);
export { RNExam as Exam };

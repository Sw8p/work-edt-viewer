import React from 'react';
import { routeNode } from 'react-router5';

import { Exam } from './components/Exam'
import { NoMatch } from './components/NoMatch'

class App extends React.Component {
    render() {
        const { route } = this.props;

        const topLevelRouteName = route.name.split('.')[0];

        let Scene = null;
        switch (topLevelRouteName) {
            case 'exam':
                Scene = Exam;
                break;
            default:
                Scene = NoMatch;
        }

        return (
            <React.Fragment>
                <Scene {...this.props} />
            </React.Fragment>
        );
    }
}

const RNApp = routeNode('')(App);
export { RNApp as App };

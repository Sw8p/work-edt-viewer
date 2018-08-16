import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class Unknown extends React.Component {
    render() {
        return <div>TYPE DE QUESTION NON RECONNUE !</div>;
    }
}

Unknown.instruction = (
  <React.Fragment>
    Oops lol
  </React.Fragment>
);

Unknown.propTypes = {};

Unknown.defaultProps = {};

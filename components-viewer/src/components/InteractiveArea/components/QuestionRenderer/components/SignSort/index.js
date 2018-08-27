import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class SignSort extends React.Component {
    render() {
      const { data } = this.props
      return (
        <div className="signSort">
          {data.map((sign, index) => (
            <div key={index} className="signSort__answer">
              <span className="signSort__answer__sign">{sign}</span>
              <span className="signSort__answer__button"></span>
            </div>
          ))}
        </div>
      )
    }
}

SignSort.instruction = (
    <span>
        Sélectionner <strong>la ou les</strong> bonne(s) réponse(s)
    </span>
);

SignSort.propTypes = {
    data: PropTypes.object.isRequired
};

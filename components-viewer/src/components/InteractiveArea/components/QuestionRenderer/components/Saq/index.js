import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class Saq extends React.Component {
    render() {
      const { data } = this.props
        return (
          <div className="SAQ">
            {data.map((value, k) => (
              <div className="SAQ__answer" key={k}>
                <span className="SAQ__answer__button"></span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        );
    }
}

Saq.instruction = (
    <span>
        Sélectionner <strong>la</strong> bonne réponse
    </span>
);

Saq.propTypes = {
    data: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class BlankText extends React.Component {
    render() {
      const { data } = this.props

      return (
        <div className="blankText">
          {data.map((intitule, index) => (
            <div className="blankText__container" key={index}>
              <p>{intitule[0]}</p>
              <select className="blankText__container__dropdown blankText__container__dropdown--selected">
                <option default value="..."><p>…</p></option>
                {intitule[1].map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      );
    }
}

BlankText.instruction = (
    <span>Choisir les mots manquants du texte à trous</span>
);

BlankText.propTypes = {
    data: PropTypes.object.isRequired
};

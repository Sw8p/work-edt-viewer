import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class Slider extends React.Component {
    render() {
      const { data } = this.props

      return (
        <div className="slider">
          <div className="slider__answer">
            <p>{"value selected"}</p>
          </div>
          <div className="slider__point"></div>
          <input type="range" min={data[0]} max={data[1]}></input>
        </div>
      );
    }
}


Slider.propTypes = {
    data: PropTypes.object.isRequired
};

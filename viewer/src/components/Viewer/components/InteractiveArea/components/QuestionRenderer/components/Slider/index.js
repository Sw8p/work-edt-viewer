import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class Slider extends React.Component {
    render() {
        return <div>CECI EST UN SLIDER</div>;
    }
}

Slider.instruction = <span>Déplacer le curseur</span>;

Slider.propTypes = {
    data: PropTypes.object.isRequired
};

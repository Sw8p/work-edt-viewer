import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class SignSort extends React.Component {
    render() {
        return <div>CECI EST UN TRIPANNEAUX</div>;
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

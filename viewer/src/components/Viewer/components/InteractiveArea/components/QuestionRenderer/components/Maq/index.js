import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class Maq extends React.Component {
    render() {
        return <div>CECI EST UN QCM</div>;
    }
}

Maq.instruction = (
    <span>
        Sélectionner <strong>la ou les</strong> bonne(s) réponse(s)
    </span>
);

Maq.propTypes = {
    data: PropTypes.object.isRequired
};

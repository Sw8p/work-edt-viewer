import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class Saq extends React.Component {
    render() {
        return <div>CECI EST UNE QUESTION A REPONSE UNIQUE</div>;
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

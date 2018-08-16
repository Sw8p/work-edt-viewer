import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export class BlankText extends React.Component {
    render() {
        return <div>CECI EST UN TEXTE A TROUS</div>;
    }
}

BlankText.instruction = (
    <span>Choisir les mots manquants du texte à trous</span>
);

BlankText.propTypes = {
    data: PropTypes.object.isRequired
};

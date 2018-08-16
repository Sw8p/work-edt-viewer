import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export const MediaRenderer = ({ media }) => {
    // faire qqch avec le media ici :D

    return (
        <div className="viewer__main__visual">
            <video src="foo" controls autoPlay muted>
                <p>
                    Votre navigateur web ne permet pas d‘afficher la vidéo, nous
                    en sommes désolés.
                </p>
            </video>
        </div>
    );
};

MediaRenderer.propTypes = {
    media: PropTypes.string
};

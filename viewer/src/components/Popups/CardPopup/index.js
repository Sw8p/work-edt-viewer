import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'components/Card';

import './style.css';

export const CardPopup = ({
    component: Component,
    cancelable,
    className,
    ...props
}) => {
    return (
        <Card className={className}>
            {cancelable && (
                <button onClick={props.hide} className="card-popup__close">
                    <span className="card-popup__close__slash" />
                    <span className="card-popup__close__slash--back" />
                </button>
            )}
            <Component {...props} />
        </Card>
    );
};

CardPopup.propTypes = {
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

import React from 'react';
import classNames from 'classnames';

import './style.css';

export const Card = ({ children, className }) => {
    return <div className={classNames('card', className)}>{children}</div>;
};

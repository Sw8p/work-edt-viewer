import React from 'react';
import classNames from 'classnames';


import './style.css';

export const Button = ({ children, className, ...buttonProps }) => {
    return (
        <button
            type="button"
            className={classNames('primary', className)}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

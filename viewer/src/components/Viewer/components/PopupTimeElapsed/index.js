import React from 'react';
import { withRoute } from 'react-router5';

import { Button } from 'components/Button';

import './style.css';

const PopupTimeElapsed = ({ router, hide }) => {
    return (
        <div>
            <Button
                onClick={() => {
                    router.navigate('exam.results');
                    hide();
                }}
            >
                Voir mes résultats
            </Button>
        </div>
    );
};

const WRPopupTimeElapsed = withRoute(PopupTimeElapsed);
export { WRPopupTimeElapsed as PopupTimeElapsed };

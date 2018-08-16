//import React from 'react';
import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import browserPlugin from 'router5/plugins/browser';

import routes from './routes';

export function create() {
    const router = createRouter(routes, {
        defaultRoute: 'exam'
    });

    if (process.env.NODE_ENV !== 'production') {
        router.usePlugin(loggerPlugin);
    }

    router.usePlugin(browserPlugin());

    return router;
}

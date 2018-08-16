import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';

import { App } from './App';


import { create } from './router/create-router';

import './style.css';


const router = create();

router.start(() => {
    ReactDOM.render(
          <RouterProvider router={router}>
              <App />
          </RouterProvider>,
        document.getElementById('root')
    );
});

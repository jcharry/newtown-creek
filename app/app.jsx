/* global document */
// Client side modules
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import router from 'app/router/index';

import configure from './store/configureStore';
// Main styles
import './styles/main.scss';

const store = configure();


ReactDOM.render(
    <div>
        <Provider store={store}>
            {router}
        </Provider>
    </div>,
    document.getElementById('app')
);


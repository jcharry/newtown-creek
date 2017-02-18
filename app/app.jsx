/* global document */
// Client side modules
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import router from 'app/router/index';

import configure from './store/configureStore';

// Main styles
import './styles/main.scss';

// $(document).ready(function ($) {
//     console.log('document ready');
//   $(document).foundation();
// });
// import { foundation } from 'foundation-sites/js/foundation.core';
// import 'foundation-sites/js/foundation.util.mediaQuery';
//
// // we need to attach the function we exported above to the jQuery object in use in this file

const store = configure();

ReactDOM.render(
    <div>
        <Provider store={store}>
            {router}
        </Provider>
    </div>,
    document.getElementById('app')
);


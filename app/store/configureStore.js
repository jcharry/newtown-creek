/* global window */
import * as redux from 'redux';
import thunk from 'redux-thunk';

import {landingPageReducer, loadingReducer, navReducer, pageInfoReducer, popupReducer, signedupReducer} from 'app/reducers/reducers';

const configure = (initialState = {}) => {
    const reducer = redux.combineReducers({
        isLoading: loadingReducer,
        nav: navReducer,
        isHomeVisible: landingPageReducer,
        pageInfo: pageInfoReducer,
        popup: popupReducer,
        signedup: signedupReducer
    });

    const store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

export default configure;

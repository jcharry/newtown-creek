/* global window */
import React from 'react';
import { Route, Router }  from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import PamphletContainer from '../components/ContentPage/PamphletContainer';

// const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false });

export default (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Route path='/'>
            <Landing />
        </Route>
        <Route path='/:page'>
            <PamphletContainer />
        </Route>
    </Router>
);

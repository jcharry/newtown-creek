import React from 'react';
import useRouterHistory from 'react-router/lib/useRouterHistory';
//import createHashHistory from 'react-router/node_modules/history/lib/createHashHistory';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';
//
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';

import Landing from 'app/components/Landing/Landing';
import PamphletContainer from 'app/components/ContentPage/PamphletContainer';

const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false });

export default (
    <Router history={appHistory}>
        <Route path='/'>
            <Route path='/:page' component={PamphletContainer} />
            <IndexRoute component={Landing} />
        </Route>
    </Router>
);

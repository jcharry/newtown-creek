import React from 'react';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import createHashHistory from 'history/lib/createHashHistory';
//import Link from 'react-router/lib/Link';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';

import Landing from 'app/components/Landing';
import PamphletContainer from 'app/components/PamphletContainer';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default (
    <Router history={appHistory}>
        <Route path='/'>
            <Route path='/experience/:page' component={PamphletContainer} />
            <IndexRoute component={Landing} />
        </Route>
    </Router>
);

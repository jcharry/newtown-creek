import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import Landing from 'app/components/Landing';
//import PamphletPage from 'app/components/PamphletPage';
import PamphletContainer from 'app/components/PamphletContainer';
import Index from 'app/components/Index';

export default (
    <Router history={hashHistory}>
        <Route path='/'>
            <Route path='/experience/:page' component={PamphletContainer} />
            <IndexRoute component={Landing} />
        </Route>
    </Router>
);

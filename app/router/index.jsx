import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import Landing from 'app/components/Landing';
import PamphletPage from 'app/components/PamphletPage';
import Index from 'app/components/Index';

export default (
    <Router history={hashHistory}>
        <Route path='/'>
            <Route path='/experience/:page' component={PamphletPage} />
            <Route path='/index' component={Index} />
            <Route path='/bibliography' component={PamphletPage} />
            <IndexRoute component={Landing} />
        </Route>
    </Router>
);

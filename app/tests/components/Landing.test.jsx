/* global describe it */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Provider } from 'react-redux';

import ConnectedLanding, { Landing }  from 'app/components/Landing';
import { Home } from 'app/components/Home';
import { Intro } from 'app/components/Intro';

import configureStore from 'app/store/configureStore';

describe('Landing Page', () => {
    let landing, intro, home, store;
    beforeEach(function() {
        store = configureStore();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedLanding />
            </Provider>
        );
        landing = TestUtils.scryRenderedComponentsWithType(provider, Landing)[0];
        intro = TestUtils.scryRenderedComponentsWithType(landing, Intro)[0];
        home = TestUtils.scryRenderedComponentsWithType(landing, Home)[0];
    });

    it('should exist', () => {
        expect(landing).toExist();
    });

    it('should render children', () => {
        expect(intro).toExist();
        expect(home).toExist();
        expect(landing).toExist();
    });
});


/* global describe it */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Provider } from 'react-redux';

import ConnectedNav, { Nav } from 'app/components/Nav';
import NavItem from 'app/components/NavItem';

import pageInfo from 'app/store/pageInfo';
import configureStore from 'app/store/configureStore';

describe('Nav', () => {
    it('should exist', () => {
        expect(ConnectedNav).toExist();
        expect(Nav).toExist();
    });

    it('should render as many nav items as in data', () => {
        const store = configureStore();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedNav />
            </Provider>
        );

        const nav = TestUtils.scryRenderedComponentsWithType(provider, Nav)[0];
        const navItems = TestUtils.scryRenderedDOMComponentsWithClass(nav, 'nav-item');

        expect(navItems.length).toEqual(Object.keys(pageInfo).length);
    });

    it('should dispatch action on mouseenter, mouseleave', () => {
        const store = configureStore();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedNav />
            </Provider>
        );

        const nav = TestUtils.scryRenderedComponentsWithType(provider, Nav)[0];
        const navItem = TestUtils.scryRenderedDOMComponentsWithClass(nav, 'nav-item')[0];
        TestUtils.Simulate.mouseEnter(navItem);
    });
});

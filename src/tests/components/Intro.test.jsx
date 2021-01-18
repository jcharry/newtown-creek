/* global describe it */
/* eslint
    "react/no-find-dom-node": "off"
*/
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Provider } from 'react-redux';
import ConnectedIntro, { Intro } from 'app/components/Intro';

import configureStore from 'app/store/configureStore';

describe('Intro', () => {
    it('should exist', () => {
        const store = configureStore();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedIntro />
            </Provider>
        );
        const intro = TestUtils.scryRenderedComponentsWithType(provider, Intro)[0];

        expect(intro).toExist();
    });

    it('should set visibility to true when passed visible=true as a prop', () => {
        const intro = TestUtils.renderIntoDocument(<Intro visible />);
        const elt = ReactDOM.findDOMNode(intro);

        expect(elt.style.visibility).toEqual('visible');
    });

    it('should set visibility to false when passed visible=true as a prop', () => {
        const intro = TestUtils.renderIntoDocument(<Intro visible={false} />);
        const elt = ReactDOM.findDOMNode(intro);

        expect(elt.style.visibility).toEqual('hidden');
    });

    it('should dispatch SHOW_HOME action when skip-intro btn is clicked', () => {
        const spy = expect.createSpy();
        const intro = TestUtils.renderIntoDocument(<Intro dispatch={spy} visible />);
        //const intro = TestUtils.scryRenderedComponentsWithType(provider, Intro)[0];
        //const elt = ReactDOM.findDOMNode(intro);
        const skipIntroBtn = TestUtils.scryRenderedDOMComponentsWithClass(intro, 'skip-intro')[0];

        TestUtils.Simulate.click(skipIntroBtn);
        expect(spy).toHaveBeenCalled();
    });
});

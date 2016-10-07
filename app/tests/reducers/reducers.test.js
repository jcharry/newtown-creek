/* global describe it beforeEach */
import expect from 'expect';
import * as reducers from 'app/reducers/reducers';

import df from 'deep-freeze-strict';

describe('Reducers', () => {
    describe('Loading reducer', () => {
        it('should set loading to true', () => {
            const action = {
                type: 'START_LOADING'
            };

            const res = reducers.loadingReducer(df(false), df(action));
            expect(res).toBe(true);
        });

        it('should set loading to false', () => {
            const action = {
                type: 'STOP_LOADING'
            };

            const res = reducers.loadingReducer(df(true), df(action));
            expect(res).toBe(false);
        });
    });

    describe('Nav reducer', () => {
        let defaultState = {};
        beforeEach(() => {
            defaultState = {
                navLocation: 'The Field Guide',
                hoverItem: '',
                visible: false
            };
        });

        it('should set hover item', () => {
            const action = {
                type: 'SET_HOVER_ITEM',
                id: 'item'
            };

            const res = reducers.navReducer(df(defaultState), df(action));
            expect(res.navLocation).toEqual(defaultState.navLocation);
            expect(res.visible).toEqual(defaultState.visible);
            expect(res.hoverItem).toEqual('item');
        });

        it('should clear hover item', () => {
            const action = {
                type: 'CLEAR_HOVER_ITEM'
            };

            defaultState.hoverItem = 'item';
            const res = reducers.navReducer(df(defaultState), df(action));

            expect(res.navLocation).toEqual(defaultState.navLocation);
            expect(res.visible).toEqual(defaultState.visible);
            expect(res.hoverItem).toEqual('');
        });

        it('should set nav location', () => {
            const action = {
                type: 'SET_NAV_LOCATION',
                loc: 'Right here'
            };

            const res = reducers.navReducer(df(defaultState), action);
            expect(res.navLocation).toEqual(action.loc);
            expect(res.visible).toEqual(defaultState.visible);
            expect(res.hoverItem).toEqual(defaultState.hoverItem);
        });

        it('should set visible true', () => {
            const action = {
                type: 'SHOW_NAV'
            };

            defaultState.visible = false;
            const res = reducers.navReducer(df(defaultState), action);

            expect(res.navLocation).toEqual(defaultState.navLocation);
            expect(res.hoverItem).toEqual(defaultState.hoverItem);
            expect(res.visible).toEqual(true);
        });

        it('should set visible to false', () => {
            const action = {
                type: 'HIDE_NAV'
            };

            defaultState.visible = true;
            const res = reducers.navReducer(df(defaultState), action);

            expect(res.navLocation).toEqual(defaultState.navLocation);
            expect(res.hoverItem).toEqual(defaultState.hoverItem);
            expect(res.visible).toEqual(!defaultState.visible);
        });

        it('should return state when invalid action is passed', () => {
            const res = reducers.navReducer(df(defaultState), df({}));

            expect(res).toEqual(defaultState);
        });
    });

    describe('landingPageReducer', () => {
        it('should set state to true when SHOW is called', () => {
            const action = {
                type: 'SHOW_HOME'
            };

            const res = reducers.landingPageReducer(false, action);

            expect(res).toEqual(true);
        });

        it('should set state to false when HIDE is called', () => {
            const action = {
                type: 'HIDE_HOME'
            };

            const res = reducers.landingPageReducer(true, action);

            expect(res).toEqual(false);
        });
    });

    describe('popupReducer', () => {
        it('should set state to true when SHOW is called', () => {
            const action = {
                type: 'SHOW_DOWNLOAD_POPUP'
            };

            const res = reducers.popupReducer(df(false), df(action));

            expect(res).toEqual(true);
        });

        it('should set state to false when HIDE is called', () => {
            const action = {
                type: 'HIDE_DOWNLOAD_POPUP'
            };

            const res = reducers.popupReducer(df(true), df(action));

            expect(res).toEqual(false);
        });
    });
});

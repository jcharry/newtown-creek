/* global describe it */
import expect from 'expect';
import * as actions from 'app/actions/actions';

describe('Actions', () => {
    it('should generate start loading action', () => {
        const startAction = {
            type: 'START_LOADING'
        };
        const stopAction = {
            type: 'STOP_LOADING'
        };
        const stopRes = actions.stopLoading();
        const startRes = actions.startLoading();

        expect(stopRes).toEqual(stopAction);
        expect(startRes).toEqual(startAction);
    });

    it('should generate stop loading action', () => {
    });

    it('should generate menu hover actions', () => {
        const setHoverAction = {
            type: 'SET_HOVER_ITEM',
            id: 'item'
        };
        const clearHoverAction = {
            type: 'CLEAR_HOVER_ITEM'
        };

        const setRes = actions.setHoverItem('item');
        const clearRes = actions.clearHoverItem();
        expect(setRes).toEqual(setHoverAction);
        expect(clearRes).toEqual(clearHoverAction);
    });

    it('should generate nav actions', () => {

    });

    it('should generate home actions', () => {

    });

    it('should generate download popup actions', () => {

    });
});

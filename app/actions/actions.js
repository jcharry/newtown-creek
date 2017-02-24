import axios from 'axios';

export const startLoading = () => ({
    type: 'START_LOADING'
});

export const stopLoading = () => ({
    type: 'STOP_LOADING'
});

export const setHoverItem = id => ({
    type: 'SET_HOVER_ITEM',
    id
});

export const clearHoverItem = () => ({
    type: 'CLEAR_HOVER_ITEM'
});

export const setNavLocation = loc => ({
    type: 'SET_NAV_LOCATION',
    loc
});

export const hideHome = () => ({
    type: 'HIDE_HOME'
});

export const showHome = () => ({
    type: 'SHOW_HOME'
});

export const showNav = () => ({
    type: 'SHOW_NAV'
});

export const hideNav = () => ({
    type: 'HIDE_NAV'
});

export const showDownloadPopup = () => ({
    type: 'SHOW_DOWNLOAD_POPUP'
});

export const hideDownloadPopup = () => ({
    type: 'HIDE_DOWNLOAD_POPUP'
});

export const signUp = email =>
    (dispatch, getState) => {
        axios.post('/api/signup', { email })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setSignupState(true));
                }
            })
            .catch(err => {
                console.log(err);
                console.log(typeof err);
            });
    };

const setSignupState = signedup => ({
    type: 'SET_SIGNUP_STATE',
    signedup
});

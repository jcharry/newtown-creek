import pageInfo from 'app/store/pageInfo';

export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return true;
        case 'STOP_LOADING':
            return false;
        default:
            return state;
    }
};

export const navReducer = (state = { navLocation: 'The Field Guide', hoverItem: '', visible: false }, action) => {
    switch (action.type) {
        case 'SET_HOVER_ITEM':
            return {
                ...state,
                hoverItem: action.id
            };
        case 'CLEAR_HOVER_ITEM':
            return {
                ...state,
                hoverItem: ''
            };
        case 'SET_NAV_LOCATION':
            return {
                ...state,
                navLocation: action.loc
            };
        case 'SHOW_NAV':
            return {
                ...state,
                visible: true
            };
        case 'HIDE_NAV':
            return {
                ...state,
                hoverItem: '',
                visible: false
            };
        default:
            return state;
    }
};

export const landingPageReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_HOME':
            return true;
        case 'HIDE_HOME':
            return false;
        default:
            return state;
    }
};

export const pageInfoReducer = (state = pageInfo, action) => { // eslint-disable-line
    return state;
};

export const popupReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_DOWNLOAD_POPUP':
            return true;
        case 'HIDE_DOWNLOAD_POPUP':
            return false;
        default:
            return state;
    }
};

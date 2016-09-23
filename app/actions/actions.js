export const startLoading = () => {
    return {
        type: 'START_LOADING'
    };
};

export const stopLoading = () => {
    return {
        type: 'STOP_LOADING'
    };
};

export const setHoverItem = (id) => {
    return {
        type: 'SET_HOVER_ITEM',
        id
    };
};

export const clearHoverItem = () => {
    return {
        type: 'CLEAR_HOVER_ITEM'
    };
};

export const setNavLocation = (loc) => {
    return {
        type: 'SET_NAV_LOCATION',
        loc
    };
};

export const hideHome = () => {
    return {
        type: 'HIDE_HOME'
    };
};

export const showHome = () => {
    return {
        type: 'SHOW_HOME'
    };
};

export const showNav = () => {
    return {
        type: 'SHOW_NAV'
    };
};
export const hideNav = () => {
    return {
        type: 'HIDE_NAV'
    };
};

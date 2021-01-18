import React from 'react';
import { connect } from 'react-redux';

import PopupItem from './/PopupItem';

import * as actions from '../actions/actions'
import { randString } from '../extras/helpers'

export class DownloadPopup extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePortalClick = this.handlePortalClick.bind(this);
        this.handleEsc = this.handleEsc.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleEsc);
    }

    handleClick(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.hideDownloadPopup());
    }

    handleEsc(e) {
        const { dispatch } = this.props;
        if (e.keyCode === 27) {
            dispatch(actions.hideDownloadPopup());
        }
    }

    handlePortalClick(e) {
        if (e.target.getAttribute('class') === 'popup-container') {
            const { dispatch } = this.props;
            dispatch(actions.hideDownloadPopup());
        }
    }

    render() {
        const style = {};
        const { visible, pageData } = this.props;
        if (visible) {
            style.visibility = 'visible';
        } else {
            style.visibility = 'hidden';
        }

        return (
            <div onClick={this.handlePortalClick} className='popup-container' style={style}>
                <div className='popup'>
                    <h2>{pageData.popupTitle}</h2>
                    {pageData.popupContent}
                    <button className='download-popup-close-btn is-active hamburger hamburger--spring' type='button' onClick={this.handleClick}>
                        <span className='hamburger-box'>
                            <span className='hamburger-inner' />
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}

DownloadPopup.propTypes = {
    visible: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
    pageData: React.PropTypes.object
};

export default connect((state) => {
    return {
        pageInfo: state.pageInfo
    };
})(DownloadPopup);

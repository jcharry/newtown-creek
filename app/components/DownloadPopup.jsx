import React from 'react';
import { connect } from 'react-redux';

import PopupItem from 'app/components/PopupItem';

import * as actions from 'app/actions/actions';
import { randString } from 'app/extras/helpers';

export class DownloadPopup extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.hideDownloadPopup());
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
            <div className='popup-container' style={style}>
                <div className='popup'>
                    <h2>Want to Participate? Here's how:</h2>
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

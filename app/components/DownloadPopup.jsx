import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'app/actions/actions';

export class DownloadPopup extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
    }
    handleClick(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.hideDownloadPopup());
    }
    render() {
        let style = {};
        const { popup } = this.props;
        if (popup) {
            style.visibility = 'visible';
        } else {
            style.visibility = 'hidden';
        }
        return (
            <div className='download-popup' style={style}>
                <p>download</p>
                <button onClick={this.handleClick}>X</button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        popup: state.popup
    };
})(DownloadPopup);

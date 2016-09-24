import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'app/actions/actions';

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
        const { visible } = this.props;
        if (visible) {
            style.visibility = 'visible';
        } else {
            style.visibility = 'hidden';
        }
        return (
            <div className='download-popup' style={style}>
                <div className='bg'>
                    <h2>Want to Participate? Here's how:</h2>
                    <ol>
                        <li>
                            <p><span className='clickable'>Download</span> the pamphlet and go identify things at Newtown Creek</p>
                        </li>
                        <li>
                            <p><span className='clickable'>Go on the audio walk</span> lorem ipsum dolor sit</p>
                        </li>
                        <li>
                            <p><span className='clickable'>Attend our next event</span> on November 21, 2016</p>
                        </li>
                    </ol>
                <button className='download-popup-close-btn is-active hamburger hamburger--spring' type='button' onClick={this.handleClick}>
                    <span className='hamburger-box'>
                        <span className='hamburger-inner'/>
                    </span>
                </button>
                </div>
            </div>
        );
    }
}

DownloadPopup.propTypes = {
    visible: React.PropTypes.bool,
    dispatch: React.PropTypes.func
};

export default connect()(DownloadPopup);

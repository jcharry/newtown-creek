/* global alert */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

/**
 * For future readers of this code - this component is no longer being
 * used in it's intended form, since we aren't currently collecting
 * emails. Instaed, it's just a wrapper for an absolutely positioned
 * footer, with static content inside. I'm leaving the email code
 * in here for now in case it's needed in the future
*/
class MailingListBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);

        // this.emailRe= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

        this.state = {
            email: '',
            valid: false
        };
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    //eslint-disable-line
        return re.test(email);
    }

    handleInputChange(e) {
        this.setState({
            email: e.target.value,
            valid: this.validateEmail(e.target.value)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;

        if (this.validateEmail(this.state.email)) {
            // Ajax action
            dispatch(actions.signUp(this.state.email));
        } else {
            // alert('Please enter a valid email address');
        }
    }

    render() {
        const { signedup } = this.props;

        const renderError = () => {
            if (this.state.email === '') {
                return null;
            }

            if (!this.state.valid) {
                return (
                    <p className='input-error'>Please enter a correct email address</p>
                );
            }

            return null;
        }

        const renderContent = () => {
            if (!signedup) {
                return (
                    <div className='mailing-list-box'>
                        <h3>JOIN OUR MAILING LIST</h3>
                        <div className='input'>
                            <div className='input-content'>
                                <input type='text' onChange={this.handleInputChange} value={this.state.email} placeholder='EMAIL ADDRESS' />
                                <button type='submit' onClick={this.handleSubmit}>JOIN</button>
                            </div>
                            {renderError()}
                        </div>
                    </div>
                );
            }

            return (
                <div className='mailing-list-box'>
                    <h3>Thanks for signing up!</h3>
                </div>

            );
        };

        return renderContent();
    }
}

MailingListBox.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    signedup: React.PropTypes.bool.isRequired
};

export default connect(state => ({
    signedup: state.signedup
}))(MailingListBox);

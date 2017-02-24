import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'app/actions/actions';

class MailingListBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.emailRe= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

        this.state = {
            email: '',
            valid: false
        };
    }

    handleInputChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;

        dispatch(actions.signUp(this.state.email));
        // if (this.emailRe.test(this.state.email)) {
        //     // Ajax action
        //     dispatch(actions.signUp(this.state.email));
        // } else {
        //     alert('Please enter a valid email address');
        // }
    }

    render() {
        const { signedup } = this.props;

        const renderContent = () => {
            if (!signedup) {
                return (
                    <div className='mailing-list-box'>
                        <h3>JOIN OUR MAILING LIST</h3>
                        <div className='input'>
                            <input type='text' onChange={this.handleInputChange} value={this.state.email} placeholder='EMAIL ADDRESS' />
                            <button type='submit' onClick={this.handleSubmit}>JOIN</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='mailing-list-box'>
                        <h3>Thanks for signing up!</h3>
                    </div>

                )
            }
        }

        return renderContent();
    }
}

MailingListBox.propTypes = {
    dispatch: React.PropTypes.func.isRequired
};

export default connect(state => ({
    signedup: state.signedup
}))(MailingListBox);

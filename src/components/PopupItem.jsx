import React from 'react';
import { connect } from 'react-redux';

//import * as actions from 'app/actions/actions';

export class PopupItem extends React.Component {
    render() {
        const { linkText, rest, url } = this.props;
        return (
            <li className='popup-item'>
                <p><a href={url && url} className='clickable'>{linkText}</a> {rest}</p>
            </li>
        );
    }
}

PopupItem.propTypes = {
    linkText: React.PropTypes.string,
    rest: React.PropTypes.string,
    url: React.PropTypes.string
};

export default connect()(PopupItem);

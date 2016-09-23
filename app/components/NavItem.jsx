import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from 'app/actions/actions';

function NavItem(props) {
    const { dispatch, header, subHeader, url, position, active, shouldBlur } = props;

    const handleMouseOver = function(e) {
        e.preventDefault();
        dispatch(actions.setHoverItem(position));
    };

    const handleMouseOut = function(e) {
        e.preventDefault();
        dispatch(actions.clearHoverItem());
    };

    const constructClass = function() {
        console.log('construct nav items');
        if (!active && shouldBlur) {
            return 'nav-item blur';
        } else if (active && shouldBlur) {
            return 'nav-item active';
        }

        return 'nav-item';
    };

    return (
        <div
            className={constructClass()}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Link onClick={() => { dispatch(actions.hideNav()); }} to={`/experience/${url}`} >
                <div className='nav-left'>
                    <p>{position}&nbsp;&nbsp;/</p>
                </div>
                <div className='nav-right'>
                    <h1>{header}</h1>
                    <h2>{subHeader}</h2>
                </div>
            </Link>
        </div>
    );
}

NavItem.propTypes = {
    header: React.PropTypes.string.isRequired,
    subHeader: React.PropTypes.string,
    url: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    dispatch: React.PropTypes.func,
    shouldBlur: React.PropTypes.bool.isRequired
};

export default connect()(NavItem);

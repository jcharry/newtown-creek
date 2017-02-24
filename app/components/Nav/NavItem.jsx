import React from 'react';
import Link from 'react-router/lib/Link';

function NavItem(props) {
    const {
        handleMouseEnter,
        handleMouseLeave,
        header,
        subHeader,
        url,
        position,
        active,
        shouldBlur
    } = props;

    const constructClass = function() {
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
            onMouseEnter={(e) => { handleMouseEnter(e, position); }}
            onMouseLeave={handleMouseLeave}
        >
            <Link className='nav-link' to={`${url}`} >
                <div className='nav-left'>
                    <p className='nav-item-number'>{position} </p>
                </div>
                <div className='nav-right'>
                    <h2>{header}</h2>
                </div>
            </Link>
        </div>
    );
}

NavItem.defaultProps = {
    subHeader: ''
};

NavItem.propTypes = {
    header: React.PropTypes.string.isRequired,
    subHeader: React.PropTypes.string,
    url: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    handleMouseEnter: React.PropTypes.func.isRequired,
    handleMouseLeave: React.PropTypes.func.isRequired,
    shouldBlur: React.PropTypes.bool.isRequired
};

export default NavItem;
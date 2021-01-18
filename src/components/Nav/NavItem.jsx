import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function NavItem(props) {
    const {
        handleMouseEnter,
        handleMouseLeave,
        header,
        subHeader,
        url,
        position,
        shouldShowNumber,
        active,
        shouldBlur,
        icons
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
                    <p className={shouldShowNumber === true ? 'nav-item-number' : 'nav-item-number number-hidden'}>{position} </p>
                </div>
                <div className='nav-right'>
                    <h2>{header}</h2>
                    {icons && <div className='nav-item-icons'>{icons.map((icon, index) => <img key={index} src={icon} />)}</div>}
                </div>
            </Link>
        </div>
    );
}

NavItem.defaultProps = {
    subHeader: ''
};

NavItem.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
    url: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired,
    shouldBlur: PropTypes.bool.isRequired
};

export default NavItem;

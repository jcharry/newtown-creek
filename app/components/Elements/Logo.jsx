/*
 * Logo.jsx
 * Copyright (C) 2017 jamiecharry <jamiecharry@Jamies-Air-2.home>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react';
import logo from 'assets/logo.png';

class Logo extends React.Component {
    render() {
        return (
            <img className='fsde-logo' src={logo} onClick={this.props.handleClick} alt='fsde logo' />
        );
    }
}

Logo.defaultProps = {
    handleClick: null
};

Logo.propTypes = {
    handleClick: React.PropTypes.func
};

export default Logo;

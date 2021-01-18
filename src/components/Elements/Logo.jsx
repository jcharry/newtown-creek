/*
 * Logo.jsx
 * Copyright (C) 2017 jamiecharry <jamiecharry@Jamies-Air-2.home>
 *
 * Distributed under terms of the MIT license.
 */
import PropTypes from 'prop-types';

import React from 'react';
import { ReactSVG } from 'react-svg';
// import logo from 'assets/logo.svg';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.svgLoaded = this.svgLoaded.bind(this);
    }
    svgLoaded(svg) {
        svg.onclick = this.props.handleClick;
    }
    render() {
        return (
            <ReactSVG path='assets/fsdelogo.svg'
                callback={this.svgLoaded}
                className='fsde-logo' />
        );
    }
}

Logo.defaultProps = {
    handleClick: null
};

Logo.propTypes = {
    handleClick: PropTypes.func
};

export default Logo;

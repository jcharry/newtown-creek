/*
 * HamburgerButton.jsx
 * Copyright (C) 2017 jamiecharry <jamiecharry@172-16-227-158.DYNAPOOL.NYU.EDU>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react';

class HamburgerButton extends React.Component {
    render() {
        const { handleClick, open } = this.props;
        let cls = 'menu hamburger hamburger--spring';
        if (open) {
            cls += ' is-active menu-open';
        }

        return (
            <button className={cls} type='button' onClick={handleClick}>
                <span className='hamburger-box'>
                    <span className={open ? 'hamburger-inner menu-active' : 'hamburger-inner'} />
                </span>
            </button>
        );
    }
}

export default HamburgerButton;

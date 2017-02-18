/*
 * MailingListBox.jsx
 * Copyright (C) 2017 jamiecharry <jamiecharry@Jamies-Air-2.home>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react';

class MailingListBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='mailing-list-box'>
                <h3>JOIN OUR MAILING LIST</h3>
                <div className='input'>
                    <input type='text' placeholder='EMAIL ADDRESS'/>
                    <button type='submit'>JOIN</button>
                </div>
            </div>
        );
    }
}

export default MailingListBox;

import React from 'react';
import ExternalLink from './ExternalLink';

class Footer extends React.Component {
    render() {
        return (
            <div className='page-footer'>
                <ExternalLink url='https://www.facebook.com/FloatingStudioforDarkEcologies'>Like us on Facebook to hear about upcoming events</ExternalLink>
                <a href='mailto: newtowncreekfieldguide@gmail.com'>Contact us here</a>
            </div>

        );
    }
}

export default Footer;

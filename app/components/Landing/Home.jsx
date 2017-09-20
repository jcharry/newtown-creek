import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from 'app/components/Nav/Nav';
import Logo from 'app/components/Elements/Logo';
// import MailingListBox from 'app/components/Elements/MailingListBox';
import Footer from 'app/components/Elements/Footer';
import ExternalLink from 'app/components/Elements/ExternalLink';

import * as actions from 'app/actions/actions';

// import ReactSVG from 'react-svg';
import Isvg from 'react-inlinesvg';

//const bgImg = require('../images/Newtown_Creek_and_Factory.jpg');

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.hideHome = this.hideHome.bind(this);
    }

    componentDidMount() {
        const { visible } = this.props;
        if (visible) {
            this.elt.style.opacity = 1;
        } else {
            this.elt.style.opacity = 0;
        }
    }
    componentDidUpdate(prevProps) {
        const { visible } = this.props;
        if (visible !== prevProps.visible) {
            if (visible) {
                console.log('home should appear');
                this.elt.style.opacity = 1;
            } else {
                console.log('home should disappear');
                this.elt.style.opacity = 0;
            }
        }
    }

    hideHome(e) {
        console.log('should hide home');
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.hideHome());
    }

    render() {
        return (
            <div className='home' ref={(c) => { this.elt = c; }}>
                <Isvg className='creek-bg' src='assets/CreekBackground.svg' />
                <div className='home-content'>
                    <div className='home-left'>
                        <div className='left-content'>
                            <h2>A Field Guide to the Dark Ecologies of Newtown Creek connects you to the obscured, maligned, yet vital waterway that runs between Brooklyn and Queens in New York, NY. At stake along the Creek are the survival and thriving of multiple stakeholders, human and non-human.</h2>
                            <p>A Field Guide to the Dark Ecologies of Newtown Creek is designed in phases that we are developing over time. Each contains a self-guided pamphlet in conversation with a site-specific engagement, generated through community partnerships. You will find all the sections on this website, along with resources to help you engage through further ways of knowing.</p>
                            <p>The first installment of A Field Guide is available! Access our self-guided audio tour <ExternalLink url='https://itunes.apple.com/us/podcast/oil-twitchers-barge-spotters-field-guide-to-whale-creek/id1260192343?mt=2'>playlist</ExternalLink> or <ExternalLink url='/assets/031217_FieldGuide_Final_v10-web.pdf'>download the pamphlet</ExternalLink> on the <Link to='/whale-creek'>"Oil Twitchers & Barge Spotters"</Link> page.</p>
                        </div>
                    </div>
                    <div ref={(c) => { this.homeRight = c; }}className='home-right'>
                        <Nav/>
                    </div>
                </div>
                <div className='home-footer'>
                    <Footer />
                </div>
                <Logo />
            </div>
        );
    }
}

Home.propTypes = {
    dispatch: React.PropTypes.func,
    visible: React.PropTypes.bool
};

export default connect()(Home);

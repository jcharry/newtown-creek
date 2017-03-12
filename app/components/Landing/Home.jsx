import React from 'react';
import { connect } from 'react-redux';
import Nav from 'app/components/Nav/Nav';
import Logo from 'app/components/Elements/Logo';
import MailingListBox from 'app/components/Elements/MailingListBox';

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
                            <h2>
                                A Field Guide to the Dark Ecologies of Newtown Creek connects you to the obscured, maligned, yet vital waterway that runs between Brooklyn and Queens in New York, NY.  At stake along the Creek are the thriving and survival of multiple stakeholders and species, human and non-human.
                            </h2>
                            <p>At stake along the Creek are the thriving and survival of multiple stakeholders and species, human and non-human.</p>
                            <p>A Field Guide is composed of four self-guided pamphlets in conversation with site-specific engagements, all generated through community partnerships.  You will find all four on this website, ready for download, along with resources to help you engage through further ways of knowing.</p>
                            <p>A project of the Floating Studio for Dark Ecologies (FSDE).</p>
                        </div>
                    </div>
                    <div ref={(c) => { this.homeRight = c; }}className='home-right'>
                        <Nav/>
                    </div>
                </div>
                <div className='home-footer'>
                    <MailingListBox />
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


import React from 'react';
//import * as redux from 'redux';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import Nav from 'app/components/Nav/Nav';
import Logo from 'app/components/Elements/Logo';
import * as actions from 'app/actions/actions';
import { randString } from 'app/extras/helpers';
import HamburgerButton from 'app/components/Elements/HamburgerButton';
import BlueBorder from 'app/components/Elements/BlueBorder';
// import MailingListBox from 'app/components/Elements/MailingListBox';
import Footer from 'app/components/Elements/Footer';

import leftarrow from 'assets/leftarrow.png';
import rightarrow from 'assets/rightarrow.png';

export class PamphletPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }

    componentDidMount() {
        this.elt.style.opacity = 0;
        setTimeout(() => {
            this.elt.style.opacity = 1;
        }, 200);
    }

    componentDidUpdate(prevProps) {
        const { dispatch } = this.props;

        // If the page data has changed, hide the nav (i.e. a user navigated
        // to another pamphlet page by clicking a nav item)
        if (prevProps.pageData.position !== this.props.pageData.position) {
            dispatch(actions.hideNav());
        }
    }

    handleMenuClick(e) {
        const { dispatch, nav } = this.props;
        e.preventDefault();
        if (nav.visible) {
            dispatch(actions.hideNav());
        } else {
            dispatch(actions.showNav());
        }
    }

    handleDownloadClick(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.showDownloadPopup());
    }

    renderArrows(pos) {
        const allPages = this.props.allPages;
        let prevPage,
            nextPage;

        // Find previous and next page
        Object.keys(allPages).forEach(key => {
            const currentPage = parseInt(allPages[key].position, 10);
            if (currentPage === pos - 1) {
                prevPage = allPages[key];
            } else if (currentPage === pos + 1) {
                nextPage = allPages[key];
            }
        });
        return (
            <div className='arrows'>
                {prevPage && <Link className='arrow-left' to={`${prevPage.url}`}>
                    <div className='arrow-img'>
                        <img src={leftarrow} alt='click to go to previous page' />
                    </div>
                    <div className='arrow-title'>
                        <p>{prevPage.header}</p>
                    </div>
                </Link>}
                {nextPage && <Link className='arrow-right' to={`${nextPage.url}`}>
                    <div className='arrow-img'>
                        <img src={rightarrow} alt='click to go to next page' />
                    </div>
                    <div className='arrow-title'>
                        <p>{nextPage.header}</p>
                    </div>
                </Link>}
            </div>
        );
    }

    render() {
        const { nav, pageData, blurred } = this.props;
        const position = parseInt(pageData.position, 10);

        const style = {};
        if (blurred) {
            style.filter = 'blur(5px)';
        }


        return (
            <div className={nav.visible ? 'pamphlet-page pamphlet-page-fixed' : 'pamphlet-page'} ref={(c) => { this.elt = c; }} style={style} >
                <BlueBorder />
                <Link to='/'><Logo /></Link>
                <div className='pamphlet-page-header'>
                    <div className='pamphlet-page-header-title'>
                        {pageData.shouldShowNumber && <span>{pageData.position}</span>}
                        <h1>{pageData.header}</h1>
                    </div>
                    {pageData.subHeader && <p className='pamphlet-page-subheader'>{pageData.subHeader}</p>}
                    {pageData.hasPopup &&
                        <div
                            className='pamphlet-page-popup-button'
                            onClick={this.handleDownloadClick}
                        >
                            <p>{pageData.popupButtonText}</p>
                            {pageData.popupButtonIcons && pageData.popupButtonIcons.map(asset => <img key={asset} src={asset}/>)}
                        </div>
                    }
                </div>
                {pageData.pageContent && pageData.pageContent}
                <HamburgerButton handleClick={this.handleMenuClick} open={nav.visible}/>
                {nav.visible && <div className='nav-container'><Nav /></div> }
                {this.renderArrows(position)}
                <div className='footer fixed-bottom'>
                    <Footer/>
                </div>
            </div>
        );
    }

}

PamphletPage.propTypes = {
    allPages: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    nav: React.PropTypes.object.isRequired,
    pageData: React.PropTypes.object.isRequired,
    blurred: React.PropTypes.bool
};

export default connect()(PamphletPage);

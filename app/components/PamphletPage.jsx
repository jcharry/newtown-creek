import React from 'react';
//import * as redux from 'redux';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import Nav from 'app/components/Nav';
//import CustomSvg from 'app/components/CustomSvg';
//import DownloadPopup from 'app/components/DownloadPopup';
//import Nav from 'app/components/Nav';
//import { hashHistory } from 'react-router';
import * as actions from 'app/actions/actions';
import { randString } from 'app/extras/helpers';

import bgImg from '../images/Newtown_Creek_and_Factory.jpg';
import leftarrow from '../images/leftarrow.png';
import rightarrow from '../images/rightarrow.png';

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
        //this.elt.style.visibility = 'visible';
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
        Object.keys(allPages).forEach((key) => {
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
                    <div className='arrow-title'>
                        <p>{prevPage.position}&nbsp;&nbsp;/</p>
                        <p>{prevPage.header}</p>
                    </div>
                    <div className='arrow-img'>
                        <img src={leftarrow} alt='click to go to previous page' />
                    </div>
                </Link>}
                {nextPage && <Link className='arrow-right' to={`${nextPage.url}`}>
                    <div className='arrow-title'>
                        <p>{nextPage.position}&nbsp;&nbsp;/</p>
                        <p>{nextPage.header}</p>
                    </div>
                    <div className='arrow-img'>
                        <img src={rightarrow} alt='click to go to next page' />
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
                <div className='bg'>
                    <img className='bg-img' src={bgImg} alt='factory in newtown creek' />
                </div>
                <div className='pamphlet-page-header'>
                    <p>{pageData.position}</p>
                    <h1>{pageData.header}</h1>
                    {pageData.subHeader && <p className='sub'><em>{pageData.subHeader}</em></p>}
                    {pageData.hasPopup && <button onClick={this.handleDownloadClick}>{pageData.popupButtonText}</button>}
                </div>

                {this.renderArrows(position)}
                <div className='content'>
                    {pageData.pageContent && pageData.pageContent.map((content) => {
                        const Tag = content.tag;
                        if (Tag === 'svg') {
                            return content.content;
                        }
                        if (Tag === 'img') {
                            return <img key={randString()} alt={content.alt && content.alt} src={content.src} />;
                        }
                        return <Tag key={randString()}>{content.text}</Tag>;
                    })}
                </div>
                <button className={nav.visible ? 'menu hamburger hamburger--spring is-active menu-fixed' : 'menu hamburger hamburger--spring'} type='button' onClick={this.handleMenuClick}>
                    <span className='hamburger-box'>
                        <span className={nav.visible ? 'hamburger-inner menu-active' : 'hamburger-inner'} />
                    </span>
                </button>
                {nav.visible && <div className='nav-container'><Nav canClose /></div> }
                <Link to='/' className='show-intro'>A FIELD GUIDE TO THE DARK ECOLOGIES OF NEWTOWN CREEK</Link>
            </div>
        );
    }

}
                    //{pageData.pageContent && pageData.pageContent.map((content) => {
                        //return content;
                    //})}

PamphletPage.propTypes = {
    allPages: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    nav: React.PropTypes.object.isRequired,
    pageData: React.PropTypes.object.isRequired,
    blurred: React.PropTypes.bool
};

export default connect((state) => {
    return {
        //pageInfo: state.pageInfo,
        nav: state.nav
    };
})(PamphletPage);

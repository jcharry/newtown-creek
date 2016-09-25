import React from 'react';
//import * as redux from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Nav from 'app/components/Nav';
//import DownloadPopup from 'app/components/DownloadPopup';
//import Nav from 'app/components/Nav';
//import { hashHistory } from 'react-router';
import * as actions from 'app/actions/actions';

const bgImg = require('../images/Newtown_Creek_and_Factory.jpg');

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
                {prevPage && <Link className='arrow-left' to={`experience/${prevPage.url}`}>
                    <div className='arrow-title'>
                        <p>{prevPage.position}&nbsp;&nbsp;/</p>
                        <p>{prevPage.header}</p>
                    </div>
                    <div className='arrow-img'>
                        <p>&lt;</p>
                    </div>
                </Link>}
                {nextPage && <Link className='arrow-right' to={`experience/${nextPage.url}`}>
                    <div className='arrow-title'>
                        <p>{nextPage.position}&nbsp;&nbsp;/</p>
                        <p>{nextPage.header}</p>
                    </div>
                    <div className='arrow-img'>
                        <p>&gt;</p>
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
                    {pageData.downloadUrl && <button onClick={this.handleDownloadClick}>Download</button>}
                </div>

                {this.renderArrows(position)}
                <div className='content'>
                    <h2>Urban Rivers are arteries</h2>
                    <p>They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites</p>
                    <p>They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites</p>
                    <p>They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites</p>
                    <p>They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites</p>
                    <p>They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites</p>
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

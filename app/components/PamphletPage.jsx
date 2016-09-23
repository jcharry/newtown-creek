import React from 'react';
//import * as redux from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Nav from 'app/components/Nav';
//import Nav from 'app/components/Nav';
//import { hashHistory } from 'react-router';
import * as actions from 'app/actions/actions';

const bgImg = require('../images/Newtown_Creek_and_Factory.jpg');


export class PamphletPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.nav.visible);
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

    renderArrows(pos) {
        const allPages = this.props.pageInfo;
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
                    <div>
                        <p>{prevPage.position}&nbsp;&nbsp;/</p>
                        <p>{prevPage.header}</p>
                    </div>
                    <div>
                        <p>&lt;</p>
                    </div>
                </Link>}
                {nextPage && <Link className='arrow-right' to={`experience/${nextPage.url}`}>
                    <div>
                        <p>{nextPage.position}&nbsp;&nbsp;/</p>
                        <p>{nextPage.header}</p>
                    </div>
                    <div>
                        <p>&gt;</p>
                    </div>
                </Link>}
            </div>
        );
    }

    render() {
        const { nav } = this.props;
        const pageData = this.props.pageInfo[this.props.params.page];
        const position = parseInt(pageData.position, 10);
        return (
            <div className='pamphlet-page'>
                <div className='bg'>
                    <img className='bg-img' src={bgImg} alt='factory in newtown creek' />
                </div>
                <div className='pamphlet-page-header'>
                    <p>{pageData.position}</p>
                    <h1>{pageData.header}</h1>
                    {pageData.subHeader && <p className='sub'><em>{pageData.subHeader}</em></p>}
                    {pageData.downloadUrl && <button>Download</button>}
                </div>

                {this.renderArrows(position)}
                <div className='content'>
                    <h2>Urban Rivers are arteries</h2>
                    <p>They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites</p>
                </div>
                <button className={nav.visible ? "menu hamburger hamburger--spring is-active" : "menu hamburger hamburger--spring"} type="button" onClick={this.handleMenuClick}>
                      <span className="hamburger-box">
                          <span className={nav.visible ? "hamburger-inner menu-active" : "hamburger-inner"}></span>
                      </span>
                </button>
                {nav.visible && <div className='nav-container'><Nav canClose/></div> }
            </div>
        );
    }

}

PamphletPage.propTypes = {
    pageInfo: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func
};

export default connect((state) => {
    return {
        pageInfo: state.pageInfo,
        nav: state.nav
    };
})(PamphletPage);

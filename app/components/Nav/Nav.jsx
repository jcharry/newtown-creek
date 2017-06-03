import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'app/actions/actions';
import NavItem from 'app/components/Nav/NavItem';

import WhoWeAre from 'app/components/Nav/WhoWeAre';
import Mission from 'app/components/Nav/Mission';
import GetInvolved from 'app/components/Nav/GetInvolved';

export class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    componentDidMount() {
        this.elt.style.opacity = 0;
        setTimeout(() => {
            this.elt.style.opacity = 1;
        }, 100);
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(actions.hideNav());
    }

    handleMouseEnter(e, position) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.setHoverItem(position));
    }

    handleMouseLeave(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.clearHoverItem());
    }

    render() {
        const { nav, pageInfo, dispatch } = this.props;

        const buttons = [
            {
                title: 'THE FIELD GUIDE',
                id: 'fieldguide'
            },
            {
                title: 'WHO WE ARE',
                id: 'whoweare'
            },
            {
                title: 'MISSION',
                id: 'mission'
            },
            {
                title: 'GET INVOLVED',
                id: 'getinvolved'
            }
        ];
        const renderNavButtons = () =>
            buttons.map(button =>
                <p
                    key={button.title}
                    className={nav.navLocation === button.id ? 'nav-item-top active' : 'nav-item-top'}
                    onClick={() => { dispatch(actions.setNavLocation(button.id)); }}
                >{button.title}</p>
            );

        const constructNavItems = () =>
            <div className='nav-content'>
                {Object.keys(pageInfo).map(key => <NavItem
                    header={pageInfo[key].header}
                    handleMouseEnter={this.handleMouseEnter}
                    handleMouseLeave={this.handleMouseLeave}
                    subHeader={pageInfo[key].subHeader}
                    position={pageInfo[key].position}
                    url={pageInfo[key].url}
                    key={pageInfo[key].position}
                    shouldShowNumber={pageInfo[key].shouldShowNumber}
                    active={pageInfo[key].position === nav.hoverItem}
                    shouldBlur={nav.hoverItem !== ''}
                />
                )}
            </div>;

        const renderNavContent = () => {
            switch (nav.navLocation) {
                case 'fieldguide':
                    return constructNavItems();
                case 'whoweare':
                    return <WhoWeAre />;
                case 'mission':
                    return <Mission />;
                case 'getinvolved':
                    return <GetInvolved />;
                default:
                    return constructNavItems();
            }
        };

        return (
            <div className='nav' ref={c => { this.elt = c; }}>
                <div className='nav-top'>
                    {renderNavButtons()}
                </div>
                <div className='nav-bottom'>
                    {renderNavContent()}
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    nav: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    pageInfo: React.PropTypes.object.isRequired
};

export default connect(state => ({
    nav: state.nav,
    pageInfo: state.pageInfo
}))(Nav);

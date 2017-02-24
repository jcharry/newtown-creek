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

        const buttons = ['The Field Guide', 'Who We Are', 'Mission', 'Get Involved'];
        const renderNavButtons = () =>
            buttons.map(text =>
                <p
                    key={text}
                    className={nav.navLocation === text ? 'nav-item-top active' : 'nav-item-top'}
                    onClick={() => { dispatch(actions.setNavLocation(text)); }}
                >{text}</p>
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
                    active={pageInfo[key].position === nav.hoverItem}
                    shouldBlur={nav.hoverItem !== ''}
                />
                )}
            </div>;

        const renderNavContent = () => {
            switch (nav.navLocation) {
                case 'The Field Guide':
                    return constructNavItems();
                case 'Who We Are':
                    return <WhoWeAre />;
                case 'Mission':
                    return <Mission />;
                case 'Get Involved':
                    return <GetInvolved />;
                default:
                    return constructNavItems();
            }
        };

        return (
            <div className='nav' ref={(c) => { this.elt = c; }}>
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
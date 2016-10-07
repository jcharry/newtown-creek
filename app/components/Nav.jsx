import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'app/actions/actions';
import NavItem from 'app/components/NavItem';

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

        const buttons = ['The Field Guide', 'Who We Are', 'Get Involved'];
        const renderNavButtons = () => {
            return buttons.map((text) => {
                return (
                    <button
                        key={text}
                        className={nav.navLocation === text ? 'nav-button active' : 'nav-button'}
                        onClick={() => { dispatch(actions.setNavLocation(text)); }}
                    >{text}</button>
                );
            });
        };

        const constructNavItems = () => {
            return Object.keys(pageInfo).map((key) => {
                const item = pageInfo[key];
                return (
                    <NavItem
                        header={item.header}
                        handleMouseEnter={this.handleMouseEnter}
                        handleMouseLeave={this.handleMouseLeave}
                        subHeader={item.subHeader}
                        position={item.position}
                        url={item.url}
                        key={item.position}
                        active={item.position === nav.hoverItem}
                        shouldBlur={nav.hoverItem !== ''}
                    />
                );
            });
        };

        const renderNavContent = () => {
            switch (nav.navLocation) {
                case 'The Field Guide':
                    return constructNavItems();
                case 'Who We Are':
                    return (
                        <div className='who-we-are'>
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</p>
                        </div>
                    );
                case 'Get Involved':
                    return (
                        <div className='get-involved'>
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</p>
                        </div>
                    );
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
    nav: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    pageInfo: React.PropTypes.object
};

export default connect((state) => {
    return {
        nav: state.nav,
        pageInfo: state.pageInfo
    };
})(Nav);

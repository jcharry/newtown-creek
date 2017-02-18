import React from 'react';
import { connect } from 'react-redux';

import PamphletPage from 'app/components/ContentPage/PamphletPage';
import DownloadPopup from 'app/components/DownloadPopup';

export class PamphletContainer extends React.Component {
    render() {
        const pageData = this.props.pageInfo[this.props.params.page];
        const { popup, nav } = this.props;
        return (
            <div className={nav.visible ? 'pamphlet-container pamphlet-container-fixed' : 'pamphlet-container'}>
                <PamphletPage nav={nav} blurred={popup} pageData={pageData} allPages={this.props.pageInfo} />
                <DownloadPopup pageData={pageData} visible={popup} />
            </div>
        );
    }
}

PamphletContainer.propTypes = {
    pageInfo: React.PropTypes.object.isRequired,
    popup: React.PropTypes.bool.isRequired,
    params: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired
};

export default connect((state) => {
    return {
        pageInfo: state.pageInfo,
        popup: state.popup,
        nav: state.nav
    };
})(PamphletContainer);

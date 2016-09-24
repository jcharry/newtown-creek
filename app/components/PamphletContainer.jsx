import React from 'react';
import { connect } from 'react-redux';

import PamphletPage from 'app/components/PamphletPage';
import DownloadPopup from 'app/components/DownloadPopup';

export class PamphletContainer extends React.Component {
    render() {
        const pageData = this.props.pageInfo[this.props.params.page];
        const { popup } = this.props;
        return (
            <div className='pamphlet-container'>
                <PamphletPage blurred={popup} pageData={pageData} allPages={this.props.pageInfo}/>
                <DownloadPopup visible={popup}/>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        pageInfo: state.pageInfo,
        popup: state.popup
    }
})(PamphletContainer)
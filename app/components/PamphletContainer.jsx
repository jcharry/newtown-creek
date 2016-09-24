import React from 'react';
import { connect } from 'react-redux';

import PamphletPage from 'app/components/PamphletPage';
import DownloadPopup from 'app/components/DownloadPopup';

export class PamphletContainer extends React.Component {
    render() {
        const pageData = this.props.pageInfo[this.props.params.page];
        return (
            <div className='pamphlet-container'>
                <PamphletPage pageData={pageData} allPages={this.props.pageInfo}/>
                <DownloadPopup />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        pageInfo: state.pageInfo
    }
})(PamphletContainer)

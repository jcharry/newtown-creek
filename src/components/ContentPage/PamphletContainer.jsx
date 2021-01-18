import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PamphletPage from './PamphletPage'
import DownloadPopup from '../DownloadPopup'

export class PamphletContainer extends React.Component {
  render() {
    const pageData = this.props.pageInfo[this.props.match.params.page]
    const { popup, nav } = this.props
    // get page size
    let clsName = 'pamphlet-container'
    if (window.innerWidth < 980 && nav.visible) {
      clsName += ' pamphlet-container-fixed'
    }
    return (
      <div className={clsName}>
        <PamphletPage
          nav={nav}
          blurred={popup}
          pageData={pageData}
          allPages={this.props.pageInfo}
        />
        <DownloadPopup pageData={pageData} visible={popup} />
      </div>
    )
  }
}

PamphletContainer.propTypes = {
  pageInfo: PropTypes.object.isRequired,
  popup: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
}

export default connect((state) => {
  return {
    pageInfo: state.pageInfo,
    popup: state.popup,
    nav: state.nav,
  }
})(withRouter(PamphletContainer))

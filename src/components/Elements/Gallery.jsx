import PropTypes from 'prop-types'

import React from 'react'
import ReactGallery from 'react-grid-gallery'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
    }

    this.getImageSize = this.getImageSize.bind(this)
  }

  componentDidMount() {
    const { images } = this.props
    const promises = images.map((img) =>
      this.getImageSize(img.src, img.thumbnail)
    )

    Promise.all(promises).then((data) => {
      const imgs = data.map((img) => ({
        thumbnailWidth: img.width,
        thumbnailHeight: img.height,
        src: img.imgSrc,
        thumbnail: img.thumbSrc,
      }))

      this.setState({
        images: imgs,
      })
    })
  }

  getImageSize(imgSrc, thumbSrc) {
    return new Promise((resolve, reject) => {
      const newImg = new Image()
      newImg.onload = function () {
        const width = newImg.width
        const height = newImg.height
        resolve({ imgSrc, thumbSrc, width, height })
      }
      newImg.src = thumbSrc // this must be done AFTER setting onload
    })
  }

  render() {
    return (
      <ReactGallery
        enableImageSelection={false}
        style={{ width: '100%' }}
        images={this.state.images}
      />
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery

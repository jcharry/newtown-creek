/* global Image */
import React from 'react';
import ReactGallery from 'react-grid-gallery';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        };

        this.getImageSize = this.getImageSize.bind(this);
    }

    componentDidMount() {
        const { images } = this.props;
        const promises = images.map(this.getImageSize);

        Promise.all(promises).then(data => {
            const imgs = data.map(img => ({
                thumbnailWidth: img.width,
                thumbnailHeight: img.height,
                src: img.imgSrc,
                thumbnail: img.imgSrc
            }));

            this.setState({
                images: imgs
            });
        });
    }

    getImageSize(imgSrc) {
        return new Promise((resolve, reject) => {
            const newImg = new Image();
            newImg.onload = function() {
                const width = newImg.width;
                const height = newImg.height;
                resolve({ imgSrc, width, height });
            };
            newImg.src = imgSrc; // this must be done AFTER setting onload
        });
    }

    render() {
        return (
            <ReactGallery enableImageSelection={false} style={{ width: '100%' }} images={this.state.images} />
        );
    }
}

Gallery.propTypes = {
    images: React.PropTypes.array.isRequired
};

export default Gallery;

import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import * as actions from 'app/actions/actions';
import BlueBorder from 'app/components/Elements/BlueBorder';
import HamburgerButton from 'app/components/Elements/HamburgerButton';
import leftarrow from 'assets/leftarrow.png';
import rightarrow from 'assets/rightarrow.png';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.toggleLightbox = this.toggleLightbox.bind(this);
        this.changeImage = this.changeImage.bind(this);
    }

    handleArrowClick(e) {
        this.changeImage(e.target.getAttribute('name'));
    }

    changeImage(dir) {
        const { assets } = this.props;
        const len = assets.length;

        if (dir === 'right') {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1 < len ? prevState.currentIndex + 1 : 0
            }));
        } else {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1 > -1 ? prevState.currentIndex - 1 : len - 1
            }));
        }
    }

    handleClick(index) {
        const { assets, dispatch, isOpen } = this.props;
        const asset = assets[index];

        this.setState({
            currentIndex: index
        }, () => {
            this.toggleLightbox();
        });
    }

    toggleLightbox() {
        const { isOpen, dispatch } = this.props;

        if (!isOpen) {
            document.addEventListener('keyup', this.handleKey);
            document.querySelector('#app').classList.add('blur');
        } else {
            document.querySelector('#app').classList.remove('blur');
            document.removeEventListener('keyup', this.handleKey);
        }

        dispatch(actions.toggleLightbox());
    }

    handleKey(e) {
        const { dispatch } = this.props;
        console.log(e);
        if (e.keyCode === 27) {
            this.toggleLightbox();
        } else if (e.keyCode === 39) {
            // right
            this.changeImage('right');
        } else if (e.keyCode === 37) {
            // left
            this.changeImage('left');
        }
    }

    render() {
        const { assets, isOpen } = this.props;
        const { currentIndex } = this.state;

        return (
            <div className="gallery">
                {assets.map((asset, index) => {
                    return (
                    <button key={index} onClick={() => { this.handleClick(index) }} className='gallery-trigger'>
                            <img className="img" src={asset} />
                        </button>
                    );
                })}

                <Modal
                    className={{
                        base: 'lightbox',
                        afterOpen: 'lightbox_after-open',
                        beforeClose: 'myClass_before-close'
                    }}
                    overlayClassName={{
                        base: 'lightboxOverlay',
                        afterOpen: 'lightboxOverlay_after-open',
                        beforeClose: 'lightboxOverlay_before-close'
                    }}
                    isOpen={isOpen}
                >
                    <HamburgerButton handleClick={this.toggleLightbox} open />
                    <BlueBorder />
                    <div name="left" onClick={this.handleArrowClick} className='arrow-img'>
                        <img src={leftarrow} alt='click to go to previous page' />
                    </div>
                    <img className='main-img' src={assets[currentIndex]} />
                    <div name="right" onClick={this.handleArrowClick} className='arrow-img'>
                        <img src={rightarrow} alt='click to go to next page' />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(state => ({isOpen: state.isLightboxOpen}))(Gallery);

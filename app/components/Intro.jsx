import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'app/actions/actions';

const bgImg = require('../images/Newtown_Creek_and_Factory.jpg');

export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.skipIntro = this.skipIntro.bind(this);
    }

    componentDidMount() {
        const { visible } = this.props;
        if (!visible) {
            this.elt.style.opacity = 0;
            this.elt.style.visibility = 'hidden';
        } else {
            this.elt.style.opacity = 1;
            this.elt.style.visibility = 'visible';
        }
    }

    componentDidUpdate(prevProps) {
        const { visible } = this.props;
        if (visible !== prevProps.visible) {
            if (visible) {
                this.elt.style.visibility = 'visible';
                this.elt.style.opacity = 1;
            } else {
                this.elt.style.opacity = 0;
                setTimeout(() => {
                    this.elt.style.visibility = 'hidden';
                }, 500);
            }
        }
    }

    skipIntro(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.showHome());
    }

    render() {
        //const { visible } = this.props;
        return (
            <div className='intro' ref={(c) => { this.elt = c; }}>
                <div className='color-bg' />
                <div className='intro-bg'>
                    <img alt='Newtown Creek' src={bgImg} />
                </div>
                <div className='intro-text'>
                    <h1>A FIELD GUIDE TO THE DARK ECOLOGIES OF NEWTOWN CREEK</h1>
                </div>
                <button className='skip-intro' onClick={this.skipIntro}>SKIP INTRO</button>
            </div>
        );
    }
}

Intro.propTypes = {
    dispatch: React.PropTypes.func,
    visible: React.PropTypes.bool
};

export default connect()(Intro);


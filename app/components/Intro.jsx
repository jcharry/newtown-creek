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
            console.log('intro should update');
            if (visible) {
                console.log('intro should appear');
                this.elt.style.visibility = 'visible';
                this.elt.style.opacity = 1;
            } else {
                console.log('intro should disappear');
                this.elt.style.opacity = 0;
                setTimeout(() => {
                    console.log(this.elt);
                    this.elt.style.visibility = 'hidden';
                }, 500);
            }
        }
    }

    skipIntro(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        console.log('go to home');
        dispatch(actions.showHome());
    }

    render() {
        //const { visible } = this.props;
        return (
            <div className='intro' ref={(c) => { this.elt = c; }}>
                <div />
                <img alt='Newtown Creek' src={bgImg} />
                <h1>A FIELD GUIDE TO THE DARK ECOLOGIES OF NEWTOWN CREEK</h1>
                <button onClick={this.skipIntro}>SKIP INTRO</button>
            </div>
        );
    }
}

Intro.propTypes = {
    dispatch: React.PropTypes.func,
    visible: React.PropTypes.bool
};

export default connect()(Intro);


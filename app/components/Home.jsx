import React from 'react';
import { connect } from 'react-redux';
import Nav from 'app/components/Nav';

import * as actions from 'app/actions/actions';

//const bgImg = require('../images/Newtown_Creek_and_Factory.jpg');

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.hideHome = this.hideHome.bind(this);
    }

    componentDidMount() {
        const { visible } = this.props;
        if (visible) {
            this.elt.style.opacity = 1;
        } else {
            this.elt.style.opacity = 0;
        }
    }
    componentDidUpdate(prevProps) {
        const { visible } = this.props;
        if (visible !== prevProps.visible) {
            if (visible) {
                console.log('home should appear');
                this.elt.style.opacity = 1;
            } else {
                console.log('home should disappear');
                this.elt.style.opacity = 0;
            }
        }
    }

    hideHome(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(actions.hideHome());
    }

    render() {
        return (
            <div className='home' ref={(c) => { this.elt = c; }}>
                <p className='show-intro' onClick={this.hideHome}>A FIELD GUIDE TO THE DARK ECOLOGIES OF NEWTOWN CREEK</p>
                <div className='home-left'>
                    <p>A Field Guide to the Dark Ecologies of Newtown Creek, will connect members of the Newtown Creek community to the hidden potential of the obscured and maligned waterway that runs through their neighborhoods, the future of which will impact the quality of life for multiple stakeholders and species.</p>
                    <p>The Field Guide is composed of a set of four self-guided pamphlets accompanied by site-specific engagements, all generated with community partners.</p>
                </div>
                <div className='home-right'>
                    <Nav />
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    dispatch: React.PropTypes.func,
    visible: React.PropTypes.bool
};

export default connect()(Home);
//export default connect((state) => {
    //return {
        //isLoading: state.isLoading,
    //};
//})(Home);


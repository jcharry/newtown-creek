import React from 'react';
//import * as redux from 'redux';
import { connect } from 'react-redux';
import Home from 'app/components/Home';
import Intro from 'app/components/Intro';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import Nav from 'app/components/Nav';
//import { hashHistory } from 'react-router';
//import * as actions from 'app/actions/actions';

//import * as actions from 'app/actions/actions';

//const bgImg = require('../images/Newtown_Creek_and_Factory.jpg');

export class Landing extends React.Component {

    componentDidMount() {
        this.elt.style.opacity = 0;
        setTimeout(() => {
            this.elt.style.opacity = 1;
        }, 100);
    }
    componentDidUpdate(prevProps) {
        const { isHomeVisible } = this.props;
        if (isHomeVisible !== prevProps.isHomeVisible) {
            console.log('should transition');
        }
    }

    render() {
        const { isHomeVisible, isLoading } = this.props;
        console.log(isLoading);
        //const renderPage = function() {
            //return isHomeVisible ? <Home key='home'/> : <Intro key='intro'/>
        //}
        return (
            <div className='landing' ref={(c) => { this.elt = c; }}>
                <Home visible={isHomeVisible} />
                <Intro visible={!isHomeVisible} />
            </div>
        );
    }
}

Landing.propTypes = {
    isLoading: React.PropTypes.bool,
    isHomeVisible: React.PropTypes.bool
};

export default connect((state) => {
    return {
        isLoading: state.isLoading,
        isHomeVisible: state.isHomeVisible
    };
})(Landing);


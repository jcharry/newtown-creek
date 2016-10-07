import React from 'react';
import { connect } from 'react-redux';
import Home from 'app/components/Home';
import Intro from 'app/components/Intro';

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


import React from 'react';
//import * as redux from 'redux';
//import { connect } from 'react-redux';
//import Nav from 'app/components/Nav';
//import { hashHistory } from 'react-router';
//import * as actions from 'app/actions/actions';

const Index = function(props) {
    console.log(props.params.page);
    return (
        <div>
            <p>Index Page</p>
        </div>
    );
};

export default Index;

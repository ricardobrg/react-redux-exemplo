import React, { Component } from 'react';
import { connect } from 'react-redux'

const App = (props) => {

    return (
        <div>
            <p>{props.counter}</p>    
            <button onClick={props.dispatch.bind(this, {type: 'INCREMENT'})}>Mais 1</button>
            <button onClick={props.dispatch.bind(this, {type: 'DECREMENT'})}>Menos 1</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

export default connect(mapStateToProps)(App);

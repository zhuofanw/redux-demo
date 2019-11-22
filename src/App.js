import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from "./actions"

class App extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div className="container">
                <h1 className="jumbotron-heading text-center">{ this.props.counter} </h1>
                <p className="text-center">
                    <button onClick={() =>dispatch(increment("zhuofan"))} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={() =>dispatch({type: "DECREMENT"})} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //state ==> store.getState() get state from store
    return {
        counter: state.counter
    };
};

App.propTypes = {
    counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(App);
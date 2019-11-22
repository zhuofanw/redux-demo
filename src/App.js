import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from "./actions"

class App extends Component {
    render() {
        const { add } = this.props;
        // console.log(this.props);
        return (
            <div className="container">
                <h1 className="jumbotron-heading text-center">{ this.props.counter} </h1>
                <p className="text-center">
                    <button onClick={() => add("zhuofan")} className="btn btn-primary mr-2">Increase</button>
                    <button className="btn btn-danger my-2">Decrease</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        add:(name) => {dispatch(increment(name))}
    }
};

App.propTypes = {
    counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
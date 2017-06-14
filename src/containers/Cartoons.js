import React, { Component } from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import * as cartoonActions from '../actions/cartoons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// @connect(
//     state => ({cartoons: state.cartoonss}),
//     dispatch => bindActionCreators(cartoonActions, dispatch)
// )
class Cartoons extends Component {
    componentDidMount() {
        this.props.actions.fetchData()
    }

    render() {
        const cartoons = this.props.cartoons.map((cartoon, index) => {
            return (
                <li key={index}>
                    <p>{cartoon.title}</p>
                    <p>{cartoon.year}</p>
                    <br/>
                </li>
            )
        });
        console.log(cartoons);
        return (
            <div className="Cartoons">
                <Navigation active="cartoons"/>
                <div>This page will list all the cartoons I have watched!</div>
                <ul>{cartoons}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartoons: state.cartoons
});

const mapDispatchToActions = (dispatch) => ({
    actions: bindActionCreators(cartoonActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(Cartoons)

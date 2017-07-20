import React, { Component } from 'react';
import './App.css';
import { Navigation, Cartoon } from "../components/";
import * as cartoonActions from '../actions/cartoons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// @connect(
//     state => ({cartoons: state.cartoons}),
//     dispatch => bindActionCreators(cartoonActions, dispatch)
// )
class Cartoons extends Component {
    componentDidMount() {
        this.props.actions.fetchData()
    }

    render() {
        const cartoons = this.props.cartoons.map((cartoon, index) => {
            return (
                <Cartoon index={index} cartoon={cartoon} />
            )
        });
        return (
            <div className="Cartoons">
                <Navigation active="cartoons"/>
                <section className="timeline">
                    <ul>{cartoons}</ul>
                </section>
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

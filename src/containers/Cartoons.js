import React, { Component } from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
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
                <li key={index}>
                    <div className="Cartoon-container">
                        <div className="Cartoon-info">
                            <img src={cartoon.imgURL} alt={cartoon.title} />
                            <div>
                                <p>{cartoon.title}</p>
                                <p>{cartoon.cnTitle} &nbsp; {cartoon.jpTitle}</p>
                            </div>
                        </div>
                        <time>{cartoon.year}</time>
                    </div>
                </li>
            )
        });
        console.log(cartoons);
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

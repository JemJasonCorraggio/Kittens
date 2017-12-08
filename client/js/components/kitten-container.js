import React from "react";
import {connect} from "react-redux";
import Kitten from "./kitten";
import * as actions from "../actions/index";

export class KittenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.newKitten = this.newKitten.bind(this);
    }
    newKitten(){
        this.props.dispatch(actions.fetchNewKitten(this.props.categories[this.props.number]));
    }
   render (){
    return (
        <div className="kitten-container">
        <div className="title-bar"><img className = "logo" src="../assets/logo.png"/><h1 className = "title"> Woe Kittens</h1></div>
        <h2>Click the button for another kitten</h2>
        {/*change kitten pic*/}
        <button onClick={(event)=> {event.preventDefault(); this.newKitten();}}>New Kitten</button>
        {/*loading message goes here*/}
        <p>{this.props.message}</p>
        {/*Kitten pic*/}
        <Kitten src={this.props.img} />
        </div>
    );
}
}
const mapStateToProps = (state, props) => ({
    img: state.img,
    categories: state.categories,
    number: state.number,
    message: state.message
});

export default connect(mapStateToProps)(KittenContainer);
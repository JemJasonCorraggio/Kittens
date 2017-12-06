import React from 'react';
import {connect} from 'react-redux';
import Kitten from "./kitten";
import * as actions from '../actions/index';

export class KittenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.newKitten = this.newKitten.bind(this);
}
    newKitten(){
        this.props.dispatch(actions.fetchNewKitten(this.props.categories[this.props.number]));
    }
   render (){
    return (
        <div className="kitten-container">
        <h1>Kitten Generator</h1>
        <h2>Click the button for another kitten</h2>
        <button onClick={(event)=> {event.preventDefault(); this.newKitten();}}>New Kitten</button>
        <Kitten src={this.props.img} />
        </div>
    );
}
}
const mapStateToProps = (state, props) => ({
    img: state.img,
    categories: state.categories,
    number: state.number
});

export default connect(mapStateToProps)(KittenContainer);
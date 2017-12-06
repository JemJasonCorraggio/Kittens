import React from 'react';
import * as actions from '../actions/index';

export default class Kitten extends React.Component {
   render (){
    return (
        <div className="kitten">
        <img src = {this.props.src}/>
        </div>
    );
}
}

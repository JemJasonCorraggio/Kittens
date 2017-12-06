import * as actions from '../actions/index';
import store from '../store';

const initialState = {img: 'https://thecatapi.com/api/images/get?format=src&type=gif', categories: ["space","boxes","caturday","dream","sinks","clothes"],
    number: 0};

export const kittenReducer = (state=initialState, action) => {
    if(action.type==="FETCH_NEW_KITTEN"){
        if(state.number===5){
           return {img: action.kitten, categories:state.categories, number:0}; 
        }
        else {return {img: action.kitten, categories:state.categories, number:state.number+1};}
    }

    return state;
};
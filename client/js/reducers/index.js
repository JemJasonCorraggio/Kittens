import * as actions from "../actions/index";
import store from "../store";

const initialState = {img: "http://thecatapi.com/api/images/get?format=src&type=gif", categories: ["space","boxes","caturday","dream","sinks","clothes"],
    number: 0, message: ""};

export const kittenReducer = (state=initialState, action) => {
    if(action.type==="FETCH_NEW_KITTEN"){
        //resets to begining of category list
        if(state.number===5){
           return {img: action.kitten, categories:state.categories, number:0, message: ""}; 
        }
        //cycles through categories
        else {return {img: action.kitten, categories:state.categories, number:state.number+1, message: ""};}
    }
    //displays loading message
     if(action.type==="LOADING_KITTEN"){
        return {img: state.kitten, categories:state.categories, number:state.number, message: "Kitten incoming..."};
    }

    return state;
};
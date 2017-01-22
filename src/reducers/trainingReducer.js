//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = []
export default function trainingReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "FETCH":
			return state.concat(action.payload);
		default:
			return state;
	}
}

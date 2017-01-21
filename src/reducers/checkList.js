//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = {job: false, apartment: false, documentation: false, governmentServices: false, location: null};

export default function checklistReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "UPDATE":
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}

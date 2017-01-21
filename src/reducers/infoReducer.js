//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

export default function infoReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_USER:
			return   action.info;
		case types.CREATE_INFO:
			return Object.assign({},state, action.info);
		default:
			return state;

	}
}

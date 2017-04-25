//Info section reducer
// import * as types from '../actions/actionTypes';


const INITIAL_STATE = {jobs: false, housing: false, documents: false, services: false, zip: null};


export default function checklistReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "CHECKLIST":
			console.log('checkList reducer changed state',state);
			return Object.assign({},state, action.payload);
		default:
			return state;
	}

}

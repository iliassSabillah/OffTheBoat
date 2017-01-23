//Info section reducer
import * as types from '../actions/actionTypes';


<<<<<<< HEAD:src/reducers/checkListReducer.js
const INITIAL_STATE = {jobs: false, housing: false, documents: false, services: false, zip: null};
=======
const INITIAL_STATE = {job: false, apartment: false, documentation: true, governmentServices: false, location: null};
>>>>>>> 052313e05f91e083686387d39804e976160476a3:src/reducers/checkList.js

export default function checklistReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "CHECKLIST":
			return Object.assign({},state, action.payload);
		default:
			return state;
	}
}

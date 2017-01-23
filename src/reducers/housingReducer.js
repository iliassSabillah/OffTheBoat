//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = []
export default function housingReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "FETCH_HOUSING":
		return state.concat(action.payload.map((housing) => {
			return {
				company: housing.provider_name,
				address: housing.offices[0].address1,
				zip: housing.offices[0].address2,
				city: housing.offices[0].city,
				state: housing.offices[0].state,
				email: housing.connection_email,
				website: housing.website_url,
				description: housing.description,
				distance: housing.distance
			}
		}));
		default:
			return state;
	}
}

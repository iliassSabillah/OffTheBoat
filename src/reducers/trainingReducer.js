//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = []
export default function trainingReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "FETCH_TRAINING":
		return state.concat(action.payload.map((training) => {
			return {
				company: training.provider_name,
				address: training.offices[0].address1,
				suite: training.offices[0].address2,
				city: training.offices[0].city,
				email: training.connection_email,
				website: training.website_url,
				description: training.description,
				distance: training.distance,
				zip: training.offices[0].postal,
				phone: training.offices[0].phone_number
			}
		}));
		default:
			return state;
	}
}

//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = []
export default function jobReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case "FETCH_JOB":
			return state.concat(action.payload.map((job) => {
				return {
					company: job.name,
					address: job.offices[0].address1,
					suite: job.offices[0].address2,
					city: job.offices[0].city,
					email: job.connection_email,
					website: job.website_url,
					description: job.description,
					distance: job.distance,
				}
			}));
		default:
			return state;
	}
}

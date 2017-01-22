//Info actions creator
// import * as types from './actionTypes';
import $ from 'jquery';


export function fetchNycId() {
	const request = $.ajax({
		url: "https://data.cityofnewyork.us/resource/umtz-d4sd.json",
		type: "GET",
		data: {
		  "$limit" : 20,
		  "$$app_token" : "jKmKF012XCjlNMiFkklxUusmF"
		},
			success: function(data) {
				console.log('data',data)
			}
	})

	return (dispatch)=>{
		request.then((data)=>{
			dispatch({type: 'FETCH_DOC', payload: data});
			// console.log('data dispatch',data)
		});
	};

}

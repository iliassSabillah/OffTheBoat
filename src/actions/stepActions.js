//Info actions creator
// import * as types from './actionTypes';
import $ from 'jquery';


export function fetchNycId(locations){
	return {
		type: 'FETCH',
		locations
	};
}

export function fetchLocations() {
	const request = $.ajax({
    url: "https://data.cityofnewyork.us/resource/umtz-d4sd.json",
    type: "GET",
    data: {
      "$limit" : 20,
      "$$app_token" : "jKmKF012XCjlNMiFkklxUusmF"
    },
		success: function(data) {
			console.log(data)
		}
})

	return (dispatch)=>{
		request.then(({data})=>{
			dispatch({type: 'FETCH', info: data});
		});
	};

}

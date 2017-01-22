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
		});
	};

}

//API CALL TO RETRIEVE JOB INFORMATION FROM AUNT BERTHA

export function fetchJobs() {
	let apiKey = '3007cb21281f817773bd7a1aff9adb75';
	let serviceTag = 'Job+Placement,Help+Find+Work';
	let attrTag = 'Immigrants';
	let zipCode = '11001';
	const request = $.ajax({
		url: "https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/" + zipCode + "/programs?api_key=" + apiKey + "&serviceTag=" + serviceTag + "&attributeTag=" + attrTag,
		success: function(data) {
				console.log('data', data)
			}
		})

	return (dispatch)=>{
		request.then((data)=>{
			dispatch({type: 'FETCH_JOB', payload: data});
			// console.log('data dispatch',data)
		});
	};
}


//API CALL TO RETRIEVE HOUSING INFORMATION FROM AUNT BERTHA

export function fetchHousing() {
	let apiKey = '3007cb21281f817773bd7a1aff9adb75';
	let serviceTag = 'Near+Homeless,Temporary+Shelter';
	let attrTag = 'Homeless,Immigrants';
	let zipCode = '11001';
	const request = $.ajax({
		url: "https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/" + zipCode + "/programs?api_key=" + apiKey + "&serviceTag=" + serviceTag + "&attributeTag=" + attrTag,
		success: function(data) {
				console.log('data', data)
			}
		})

	return (dispatch)=>{
		request.then((data)=>{
			dispatch({type: 'FETCH_HOUSING', payload: data});
			// console.log('data dispatch',data)
		});
	};
}

//API CALL TO RETRIEVE SKILLS AND TRAINING INFORMATION FROM AUNT BERTHA

export function fetchTraining() {
	let apiKey = '3007cb21281f817773bd7a1aff9adb75';
	let serviceTag = 'Skills+%26+Training,English+as+a+Second+Language';
	let attrTag = 'Immigrants';
	let zipCode = '11001';
	const request = $.ajax({
		url: "https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/" + zipCode + "/programs?api_key=" + apiKey + "&serviceTag=" + serviceTag + "&attributeTag=" + attrTag,
		success: function(data) {
				console.log('data', data)
			}
		})

	return (dispatch)=>{
		request.then((data)=>{
			dispatch({type: 'FETCH_TRAINING', payload: data});
			// console.log('data dispatch',data)
		});
	};
}

// https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry

import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const Maps = React.createClass({
	getInitialState() {
		return {
			name: "",
			zip: null,
			lat: null,
			lng: null,
		};
	},
	componentDidMount() {

		$('select').change(function() {
		  let mode = $(this).val();
		  resetValue();
		  switch(mode) {
		    // case "place":
		    //   setplaceinput()
		    //   break
		    // case "directions":
		    //   setdirectinput();
		    //   break
		    case "search":
		    	setsearchinput();
		    	break;
		    // case "view":
		    // 	setviewinput();
		    // 	break

		  }
		});

		function genSearchURL(arr) {
			return '&q='+arr[0].value.split(' ').join("+");
		}

		$('form').submit(function(event) {
		  event.preventDefault();
		  let params = $(this).serializeArray();
		  console.log(params);
		  let url = 'https://www.google.com/maps/embed/v1/';
		  let mode = $('.mode').val();
		  console.log(mode);
		  let key = 'AIzaSyDbJUsdZAQ7Zlsa3L9Vdu1pM4E__7kZZDc';
		  let param;
		  switch(mode) {
		    case "place":
		      param = genPlaceURL(params);
		      break;
		    case "directions":
		      param = genDirectURL(params);
		      break;
		     case "search":
		      param = genSearchURL(params);
		      break;
		    case "view":
		      param = genViewURL(params);
		      break;

		  }
		  console.log(param);
		  $('iframe').attr('src', url + mode +'?key='+ key +param);
		});

	},

	render() {
		return (
			 <iframe
			  id="map"
			  width="600"
			  height="450"
			  frameborder="0" style="border:0"
			  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBR3YnmH_sCLgjpiBnGsIb8YALCQvMbhRQ&q=Coalition+for+Queens" allowfullscreen>
			</iframe>
		);
	}
});

export default Maps;
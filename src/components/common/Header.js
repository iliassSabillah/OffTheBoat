//This component handles the header navbar component
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import $ from 'jquery';

const Header = (props) => {
	$(() => {
		$(".nav-pills").on("tabsactivate", (event, ui) => window.location.hash = ui.panel.id);
	});
	return (
		<div>
			<ul className="navbar">
				<li><a className="navbar-brand" href="#">Off The Boat</a></li>
				<li>
					<IndexLink to="/">Home</IndexLink>
				</li>
				<li>
					<Link to="about">About</Link>
				</li>
				<li>
					<input type="email"
						   id="email" placeholder="Enter email"/>
				</li>
				<li>
					<input type="password"
						   id="password" placeholder="Password"/>
				</li>
				<li>
					<button className="signup" href="#">Sign Up</button>
				</li>
				<li>
					<button className="signin" type="submit">Sign In</button>
				</li>
			</ul>
			<div id="google_translate_element"></div>
			<div className="sectionNav">
				<ul className="nav nav-pills center">
					<li><IndexLink to="/">HomePage</IndexLink></li>
					<li><Link to="/checklist">CheckList</Link></li>
				</ul>
			</div>

		</div>
	);
};
Header.propTypes = {
	submit: PropTypes.func
};

export default Header;

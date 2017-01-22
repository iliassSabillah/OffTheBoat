//This component handles the Info section
import React, {PropTypes, Component}   from 'react';

class CheckList extends React.Component{

	render() {
		return (
			<div id="info" className="contact-form col-md-3">
				<h2>Hi! Welcome To The United States.</h2>
				<form >
					<p>
						<input type="checkbox" className="filled-in" id="filled-in-box" />
						<label htmlFor="filled-in-box">documents</label>
					</p>
					<p>
						<input type="checkbox" className="filled-in" id="filled-in-box"  />
						<label htmlFor="filled-in-box">Government Services</label>
					</p>
					<p>
						<input type="checkbox" className="filled-in" id="filled-in-box"  />
						<label htmlFor="filled-in-box">Jobs</label>
					</p>
					<p>
						<input type="checkbox" className="filled-in" id="filled-in-box"  />
						<label htmlFor="filled-in-box">Housing</label>
					</p>
					<p>
						<input type="checkbox" className="filled-in" id="filled-in-box"  />
						<label htmlFor="filled-in-box">Housing</label>
					</p>
				</form>
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate"/>
									<label htmlFor="email" data-error="wrong" data-success="right">Email</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
	}

CheckList.propTypes = {

};

export default CheckList;

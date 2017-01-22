//This component handles the Info section
import React, {PropTypes, Component}   from 'react';

class CheckList extends React.Component{

	handleChange(e) {
		if(e.target.checked) {
			!e.target.checked

		} else {
			e.target.checked
		}
	}
	render() {
		return (
			<div id="info" className="contact-form col-md-3">
				<h2>Hi! Welcome To The United States.</h2>
				<form >
					<p>
						<input type="checkbox" name='documents' id="filled-in-box" onChange={this.handleChange} />
						<label htmlFor="filled-in-box">documents</label>
					</p>
					<p>
						<input type="checkbox" name='services' className="services" id="filled-in-box-2" onChange={this.handleChange}/>
						<label htmlFor="filled-in-box-2">Government Services</label>
					</p>
					<p>
						<input type="checkbox" name='jobs' className="jobs" id="filled-in-box-3" onChange={this.handleChange} />
						<label htmlFor="filled-in-box-3">Jobs</label>
					</p>
					<p>
						<input type="checkbox" name='housing' className="housing" id="filled-in-box-4" onChange={this.handleChange} />
						<label htmlFor="filled-in-box-4">Housing</label>
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

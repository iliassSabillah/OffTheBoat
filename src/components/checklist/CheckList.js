//This component handles the Info section
import React, {PropTypes, Component}   from 'react';
import { Link } from 'react-router'

class CheckList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			jobs: null,
			services: null
		}
	}

	handleChange(e) {
		if(e.target.checked) {
			this.setState({[e.target.name]:!e.target.checked})
		} else {
			this.setState({[e.target.name]: e.target.checked})
		}
		console.log(e.target.name + ':' + e.target.checked)
	}
	render() {
		return (
			<div id="info" className="contact-form col-md-3">
				<h2>Hey! How may we help you today?</h2>
				<form >
					<p>
						<input type="checkbox" name='documents' id="filled-in-box" onChange={this.handleChange} />
						<label htmlFor="filled-in-box"><span>Documents</span></label>
					</p>
					<p>
						<input type="checkbox" name='services' className="services" id="filled-in-box-2" onChange={this.handleChange}/>
						<label htmlFor="filled-in-box-2"><span>Government Services</span></label>
					</p>
					<p>
						<input type="checkbox" name='jobs' className="jobs" id="filled-in-box-3" onChange={this.handleChange} />
						<label htmlFor="filled-in-box-3"><span>Jobs</span></label>
					</p>
					<p>
						<input type="checkbox" name='housing' className="housing" id="filled-in-box-4" onChange={this.handleChange} />
						<label htmlFor="filled-in-box-4"><span>Housing</span></label>
					</p>
				</form>
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate"/>
									<label htmlFor="email" data-error="wrong" data-success="right">Zip Code</label>
							</div>
						</div>
					</form>
				</div>
				<button><Link to="steps">Next</Link></button>
			</div>
		);
	}
	}

CheckList.propTypes = {

};

export default CheckList;

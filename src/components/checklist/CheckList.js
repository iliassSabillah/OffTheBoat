
//This component handles the Info section
import React, {PropTypes, Component}   from 'react';
import {Link} from "react-router";


const CheckList = React.createClass({
	getInitialState(){
		return {
			state: {
				jobs: false,
				housing: false,
				documents: false,
				services: false,
				zip: null
			}
		}
	},
	handleChange(e) {
		console.log('name', e.target.name);
		console.log('bool', e.target.checked)
		if (e.target.checked) {
			!e.target.checked
		} else {
			e.target.checked
		}
		let name = e.target.name;
		let value = e.target.checked;
		// this.props.actions.checkList({type: 'CHECKLIST', payload: {[name] : e.target.checked}})
		// let info= {jobs: false, housing: false, documents: false, services: false, zip: null}
		// info[name] = e.target.checked;
		// console.log(info);
		this.setState({[name]: value})
	},
	handleSelected(values) {
		console.log('form values', values);
		let payload = this.state
		this.props.actions.checkList({type: 'CHECKLIST', payload})
	},
	render() {
		console.log('checklist props', this.props);
		return (
			<div id="info" className="contact-form col-md-3">
				<h2>Hi! Welcome To The United States.</h2>
				<form >
					<p>
						<input type="checkbox" name='documents' id="filled-in-box" onChange={this.handleChange}/>
						<label htmlFor="filled-in-box">documents</label>
					</p>
					<p>
						<input type="checkbox" name='services' className="services" id="filled-in-box-2"
							   onChange={this.handleChange}/>
						<label htmlFor="filled-in-box-2">Government Services</label>
					</p>
					<p>
						<input type="checkbox" name='jobs' className="jobs" id="filled-in-box-3"
							   onChange={this.handleChange}/>
						<label htmlFor="filled-in-box-3">Jobs</label>
					</p>
					<p>
						<input type="checkbox" name='housing' className="housing" id="filled-in-box-4"
							   onChange={this.handleChange}/>
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
				<button onClick={this.props.handleSelected}><Link to="/steps">Next</Link></button>
			</div>
		);
	}
})

export default CheckList;

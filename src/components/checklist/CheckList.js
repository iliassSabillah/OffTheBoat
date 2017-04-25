
//This component handles the Info section
import React, {PropTypes, Component}   from 'react';
import {browserHistory, Link } from 'react-router';
// import {checkList} from '../../actions/checklistActions';


const CheckList = React.createClass({
	// getInitialState(){
	// 	return {
	// 		state: {
	// 			jobs: false,
	// 			housing: false,
	// 			documents: false,
	// 			services: false,
	// 			zip: null
	// 		}
	// 	}
	// },
	componentDidMount() {
		console.log('checklist props',this.props);
		this.props.actions.checkList(this.state)
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
		this.setState({[name] : value});
		// this.props.actions.checkList({type: 'CHECKLIST', payload: this.state});
		// let info= {jobs: false, housing: false, documents: false, services: false, zip: null}
		// info[name] = e.target.checked;
		// console.log(info);
		// this.setState({[name]: value})
	},
	handleSelected(values) {
		console.log('form values', values);
		let payload = this.state;
		console.log('payload',payload);
		// checkList({type: 'CHECKLIST', payload});
		// browserHistory.push('../steps')
	},
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
								<label htmlFor="email" data-error="wrong" data-success="right">Email</label>
							</div>
						</div>
					</form>
				</div>
				<button onClick={this.handleSelected}><Link to="/steps">Next</Link></button>
			</div>
		);
	}
});


CheckList.propTypes = {
	handleSelected: PropTypes.func
};


export default CheckList;

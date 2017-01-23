//This component handles the Info section
import React, {PropTypes, Component}   from "react";
import {Link} from "react-router";
import {checkList} from "../../actions/checklistActions";
import CheckListForm from './CheckListForm';


class CheckList extends Component {

	// handleChange(e) {
    //
    //
	// 	if (e.target.checked) {
	// 		!e.target.checked;
    //
    //
	// 	} else {
	// 		e.target.checked;
    //
	// 	}
	// 	let item = e.target.name;
	// 	this.setState({[item] : e.target.checked});
    //
	// 	console.log('item',item);
	// 	consoel.log('value',e.target.checked)
    //
	// }
	handleSubmit(values) {
		console.log('form values',values);
		this.props.actions.checkList({type: 'CHECKLIST', payload: this.state.checklist})
	}
	render() {
		// const { handleSubmit } = this.props;
		return (
			<div id="info" className="contact-form col-md-3">
<<<<<<< HEAD
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
								<input id="zip" type="zip" name="zip" className="validate"
									   onChange={this.props.handleChange}/>
								<label htmlFor="zip" data-error="wrong" data-success="right">Zip Code</label>
							</div>
						</div>
					</form>
				</div>
				<button onClick={this.props.handleSelected}><Link to="/steps">Next</Link></button>
			</div>
		);
	}
}

CheckList.propTypes = {
	handleSelected : PropTypes.func,
	handleChange: PropTypes.func
};


export default CheckList;

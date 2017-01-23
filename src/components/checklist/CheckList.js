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
				<h2>Hi! Welcome To The United States.</h2>
				<CheckListForm onSubmit={this.props.handleSubmit} />
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

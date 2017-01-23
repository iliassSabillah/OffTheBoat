import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CheckListForm extends Component {

	render() {
		console.log(this.props)
		const { handleSubmit } = this.props;
		$(document).ready(function() {
			$('select').material_select();
		});
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="filled-in-box">documents</label>
					<Field type="checkbox" name="documents" component="input" id="filled-in-box"  />
				</div>
				<div>
					<label htmlFor="filled-in-box-2">Government Services</label>
					<Field type="checkbox" name="services" className="services" component="input" id="filled-in-box-2" />
				</div>
				<div>
					<label htmlFor="filled-in-box-3">Jobs</label>
					<Field type="checkbox" name="jobs" className="jobs" component="input" id="filled-in-box-3"  />
				</div>
				<div>
					<label htmlFor="filled-in-box-4">Housing</label>
					<Field type="checkbox" name="housing" className="housing" component="input" id="filled-in-box-4"  />
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

// Decorate the form component
CheckListForm = reduxForm({
	form: 'checklist' // a unique name for this form
})(CheckListForm);

export default CheckListForm

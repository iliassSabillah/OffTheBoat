import React from 'react';
import Step from './step';

const AllSteps = React.createClass({
	componentWillMount() {
		this.props.actions.fetchNycId()
		this.props.actions.fetchJobs()
		this.props.actions.fetchHousing()

	},
	render() {
		return(
			<ul className="collapsible popout" data-collapsible="accordion">
				<Step data={this.props.docs} text={'Documents'} />
				<Step  text={'Government Services'} />
				<Step data={this.props.jobs} jobs={this.props.actions} text={'Jobs'} />
				<Step housing={this.props.actions} text={'Housing'} />
			</ul>
		);
	}
});

export default AllSteps;

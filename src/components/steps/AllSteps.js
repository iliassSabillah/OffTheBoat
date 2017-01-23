import React from 'react';
import DocumentStep from './document-step';
import HousingStep from './housing-step';
import JobStep from './job-step';
import ServicesStep from './services-step';

const AllSteps = React.createClass({
  componentDidMount() {
    this.props.actions.fetchNycId()
    this.props.actions.fetchJobs()
    this.props.actions.fetchHousing()
    this.props.actions.fetchTraining()
  },
  render() {
      return(
        <ul className="collapsible popout" data-collapsible="accordion">
          <DocumentStep docs={this.props.docs} text={'Documents'} />
          <HousingStep housing={this.props.housing} text={'Housing'} />
          <JobStep jobs={this.props.job} text={'Jobs'} />
          <ServicesStep service={this.props.training} text={'Training Services'} />
        </ul>
      );
  }
});

export default AllSteps;

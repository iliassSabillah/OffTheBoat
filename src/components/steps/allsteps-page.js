import React from 'react';
import Step from './step';

const AllSteps = React.createClass({
  render() {
      return(
        <ul className="collapsible popout" data-collapsible="accordion">
          <Step nycId={this.props.actions} text={'Documents'} />
          <Step  text={'Government Services'} />
          <Step jobs={this.props.actions} text={'Jobs'} />
          <Step housing={this.props.actions} text={'Housing'} />
        </ul>
      );
  }
});

export default AllSteps;

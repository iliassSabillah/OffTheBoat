import React from 'react';
import Step from './Step';

const AllSteps = React.createClass({
  render() {
      return(
        <ul className="collapsible popout" data-collapsible="accordion">
          <Step text={'First'} />
          <Step text={'Second'} />
          <Step text={'Third'} />
          <Step text={'Fourth'} />
        </ul>
      );
  }
});

export default AllSteps;

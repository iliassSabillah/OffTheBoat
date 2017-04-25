import React from 'react';
import Maps from "../Maps";

const JobStep = React.createClass({
  displayJob() {
    return this.props.jobs.map((job, i) => {
      return (
        <li key={i}>
          {job.company}<br/>
          {job.address}<br/>
          {job.city}<br/>
          {/* {job.description}<br/> */}
          {job.website}<br/>
          {job.phone}<br/>
          <br/>
        </li>
      )
    })
  },
  render() {
    console.log('job stop', this.props);
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          <Maps />
          <ul>{this.displayJob()}</ul>
        </div>
      </li>
    );
  }
});

export default JobStep;

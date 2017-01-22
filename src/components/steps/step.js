import React from 'react';

const Step = React.createClass({
  render() {
    return (
      <ul>
        <li>
          <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
      </ul>
    );
  }
});

export default Step;

import React from 'react';
import Maps from "../Maps";

const Step = React.createClass({
  // componentDidMount() {
  //   console.log('ACTION FIRED!!!')
  //   this.props.nycId.fetchNycId()
  // },
  render() {
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          {/*Google map will live here!!! */}
          <Maps docs={this.props.children} />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    );
  }
});

export default Step;

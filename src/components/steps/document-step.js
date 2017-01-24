import React from 'react';
import Maps from "../Maps";

const DocumentStep = React.createClass({
  displayDocs() {
    return this.props.docs.map((doc, i) => {
      if(i < 5) {
        return(
          <li key={i}>
            {doc.company}<br/>
            {doc.address}<br/>
            {doc.city}, {doc.zip}<br/>
            {doc.phone}<br/>
            <br/>
          </li>)
      }
    })
  },
  render() {
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          <Maps />
          <ul>{this.displayDocs()}</ul>
        </div>
      </li>
    );
  }
});

export default DocumentStep;

import React, { Component } from "react";

import "./displayPad.scss";

class DisplayPad extends Component {
  render() {
    return (
      <div className="display-component">
        <div id="display">
          <h2>{this.props.value}</h2>
        </div>
      </div>
    );
  }
}

export default DisplayPad;

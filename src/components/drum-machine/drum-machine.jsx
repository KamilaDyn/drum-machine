import React, { Component } from "react";

import "./drum-machine.scss";
import DrumPad from "../drum-pad/drum-pad";
import DisplayPad from "../display/displayPad";
import DrumData from "../data/drumPad-data";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DrumData,
      value: "Sound",
      sliderVal: 0.3,
      currentId: ""
    };
  }

  updateDisplay(message) {
    this.setState({
      value: message
    });
  }

  render() {
    return (
      <div id="drum-machine" className="drum-container">
        <div id="drum-pad" className="drumpad-container">
          {DrumData.map(drum => (
            <DrumPad
              {...this.state}
              key={drum.id}
              drum={drum}
              unicode={this.state.unicode}
              updateDisplay={this.updateDisplay.bind(this)}
            />
          ))}
        </div>
        <DisplayPad value={this.state.value} />
      </div>
    );
  }
}

export default DrumMachine;

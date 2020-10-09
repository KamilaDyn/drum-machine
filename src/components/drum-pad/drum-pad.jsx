import React, { Component } from "react";

import "./drum-pad.scss";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }
  componentWillMount() {
    document.removeEventListener("keydown", this.handleKey);
  }

  playSound(e) {
    const sound = document.getElementById(`${this.props.drum.innerText}`);
    sound.currentTime = 0;
    sound.play();
    this.setState({
      value: this.props.drum.id.replace(/-/g, "")
    });
    this.props.updateDisplay(this.props.drum.id, 2000);
    console.log(this.props.drum.id.replace(/-/g, ""));
    // this.props.updateDisplay(this.props.drum.id.replace(/-/g, ""));
  }
  handleKey(e) {
    if (e.keyCode === this.props.drum.unicode) {
      this.playSound();
      this.props.updateDisplay(this.props.drum.id, 2000);
    }
  }

  render() {
    return (
      <button
        id={this.props.drum.id}
        className="pushbutton drum-pad"
        onClick={this.playSound}
      >
        {this.props.drum.innerText}
        <audio
          className="clip"
          id={this.props.drum.innerText}
          src={this.props.drum.audioLink}
        ></audio>
      </button>
    );
  }
}

export default DrumPad;

import React, { Component } from "react";
import data from "../data.json";
import Directory from "./Components/Directory"
import Header from "./Components/Header"


class Body extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: "",
      currentTitle: "",
      currentAuthor: ""
    }

    this.handleFocusDirectory = this.handleFocusDirectory.bind(this);
  }

  handleFocusDirectory() {
    this.setState({
    })
  }

  render() {
    const Directory = data.map((element) => {
      return (
        <Directory
          handleFocusDirectory={this.handleFocusDirectory}
        />
      );
    });

    return (
      <div className="Body">
        <Directory data={this.state} />
        <div className="Directory-container">{Directory}</div>;
      </div>
    );
  }
}

export default Body;

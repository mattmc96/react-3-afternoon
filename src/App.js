import React, { Component } from "react";
import data from "./Components/data";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: data,
      index: 0,
      userNameInput: "",
      userHometownInput: "",
      userHomeCountryInput: "",
      userEmployerInput: "",
      userTitleInput: "",
      movie1Input: "",
      movie2Input: "",
      movie3Input: "",
    };
  }
  handlePrevious = (index) => {
    if (index === 0) {
      this.setState({ index: this.state.list.length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  };

  handleEdit = () => {
    const nameArr = this.state.userNameInput.split(" ");
    const newPerson = {
      id: this.state.index + 1,
      name: { first: nameArr[0], last: nameArr[1] },
      city: this.state.userHometownInput,
      country: this.state.userHomeCountryInput,
      employer: this.state.userEmployerInput,
      title: this.state.userTitleInput,
      favoriteMovies: [
        this.state.movie1Input,
        this.state.movie2Input,
        this.state.movie3Input,
      ],
    };
    let arr = this.state.list;
    arr.splice(this.state.index, 1, newPerson);

    this.setState({
      list: arr,
    });
  };

  handleDelete = (list) => {
    const tempArray = list;
    if (tempArray.length === 1) {
    } else {
      tempArray.splice(this.state.index, 1);
      this.setState({ list: tempArray });
    }
  };

  handleStateChange = (value, name) => {
    this.setState({ [name]: value });
  };

  handleNew = () => {
    let emptyBool = true;
    const nameArr = this.state.userNameInput.split(" ");
    const newPerson = {
      id: this.state.list.length,
      name: { first: nameArr[0], last: nameArr[1] },
      city: this.state.userHometownInput,
      country: this.state.userHomeCountryInput,
      employer: this.state.userEmployerInput,
      title: this.state.userTitleInput,
      favoriteMovies: [
        this.state.movie1Input,
        this.state.movie2Input,
        this.state.movie3Input,
      ],
    };

    for (let key in newPerson) {
      if (newPerson[key] === "") {
        emptyBool = false;
        console.log("empty fields");
      }
    }

    for (let key in newPerson.name) {
      if (newPerson.name[key] === "") {
        emptyBool = false;
        console.log("empty fields");
      }
    }
    newPerson.favoriteMovies.forEach((element) => {
      if (element === "") {
        emptyBool = false;
      }
    });

    if (emptyBool === true) {
      this.setState({ list: [...this.state.list, newPerson] });
      this.setState({ index: this.state.list.length });
    }
  };

  handleNext = (index) => {
    if (index === this.state.list.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  };
  //RENDER AND RETURN
  render() {
    return (
      <div className="App">
        <header>
          <p className="header">Home</p>
        </header>
        <div className="bottomBox">
          <div className="containerBox">
            <Person data={this.state.list} index={this.state.index} />
          </div>
          <nav>
            <button
              className="btn-3"
              onClick={() => this.handlePrevious(this.state.index)}
            >
              {"Previous"}
            </button>
            <div className="btn-2Group">
              <button className="btn-2" onClick={() => this.handleEdit()}>
                Edit
              </button>
              <button
                className="btn-2"
                onClick={() => this.handleDelete(this.state.list)}
              >
                Delete
              </button>
              <button className="btn-2" onClick={() => this.handleNew()}>
                New
              </button>
            </div>
            <button
              className="btn-3"
              onClick={() => this.handleNext(this.state.index)}
            >
              Next>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;

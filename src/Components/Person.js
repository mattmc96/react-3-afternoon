import React, { Component } from "react";
import Items from "./Items";

class Person extends Component {
  render() {
    const person = this.props.data[this.props.index];
    return (
      <div>
        <p className="index">
          {this.props.index + 1}/{this.props.data.length}
        </p>
        <div className="card">
          <h2 className="cardName">
            {person.name.first} {person.name.last}
          </h2>
          <div>
            <p>
              <span className="bold">From: </span>
              {person.city}, {person.country}
            </p>
            <p>
              <span className="bold">Job Title: </span>
              {person.title}
            </p>
            <p>
              <span className="bold">Employer: </span>
              {person.employer}
            </p>
          </div>
          <div>
            <Items movieData={person.favoriteMovies} />
          </div>
        </div>
      </div>
    );
  }
}

export default Person;

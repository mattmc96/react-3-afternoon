import React, { Component } from "react";

class Items extends Component {
  render() {
    let tempArray = [...this.props.movieData];
    return (
      <div>
        <span className="bold">Favorite Items: </span>
        <ol className="ItemsList">
          {tempArray.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default Items;

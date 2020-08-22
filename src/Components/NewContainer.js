import React, { Component } from "react";
import data from "../data.json";
import CurrentArticle from "./CurrentArticle";
import Article from "./Article";

class NewContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: "",
      currentTitle: "",
      currentAuthor: "",
    };

    this.handleFocusArticle = this.handleFocusArticle.bind(this);
  }

  handleFocusArticle(title, image, author) {
    this.setState({
      currentTitle: title,
      currentAuthor: author,
      currentImage: image,
    });
  }

  render() {
    const articles = data.map((element) => {
      return (
        <Article
          key={element.id}
          exampleProp="This is a prop"
          title={element.title}
          author={element.author}
          image={element.image}
          handleFocusArticle={this.handleFocusArticle}
        />
      );
    });

    return (
      <div className="new-container">
        <CurrentArticle data={this.state} />
        {this.state.currentTitle}
        <div className="articles-container">{articles}</div>;
      </div>
    );
  }
}

export default NewContainer;

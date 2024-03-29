import React, { Component } from "react";
import faker from "faker";

class Comment extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
        <div className="ui container comment">
        <a href="" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="" className="author">
            {this.props.author}
          </a>
          <div className="matedata">
            <span className="date"> {this.props.timeAgo}</span>
            <div className="text">{this.props.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;

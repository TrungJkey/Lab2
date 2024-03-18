import React from "react";
import faker from "faker";

const Fcomment = (props) => {
  return (
    <div className="ui container comment">
      <a href="" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="" className="author">
          {props.author}
        </a>
        <div className="matedata">
          <span className="date"> {props.timeAgo}</span>
          <div className="text">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Fcomment;

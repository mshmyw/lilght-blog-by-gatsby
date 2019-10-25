import React from "react";

export const  Comment = (props)=> {
    return (
      <div className="comment">
        <h2 className="author">{props.author}</h2>
        {props.text}
      </div>
  );
};

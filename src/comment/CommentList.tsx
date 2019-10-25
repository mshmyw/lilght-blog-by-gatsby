import React from "react";
import { Comment } from "./Comment";

export const CommentList = (props) => {
    return (
      <div className="comment-list">
        {props.data.map((c) => {
          return (
            <Comment author={c.author} text={c.text} />
          );
        })}
      </div>
    );
};


import React, {useState} from "react";
import { commentData } from "./utils";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export const CommentBox = (props) => {
  const [comments, setComments] = useState(commentData);

  const handleCommentSubmit = (comment) => {
    const newComments = comments.concat([comment]);
    setComments([...newComments]);
  };
      return (
      <div className="comment-box">
        <CommentForm data={comments} commentSubmit={handleCommentSubmit} />
        <CommentList data={comments} />
      </div>
    );
};

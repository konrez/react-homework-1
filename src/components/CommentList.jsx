import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          commentText={comment.commentText}
          replies={comment.replies}
        />
      ))}
    </div>
  );
};

export default CommentList;

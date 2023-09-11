import React, { useState } from "react";

const Comment = ({ username, commentText, replies = [] }) => {
  const [replyText, setReplyText] = useState("");
  const [replyList, setReplyList] = useState(replies);

  const handleReply = () => {
    if (replyText.trim() !== "") {
      setReplyList([...replyList, replyText]);
      setReplyText("");
    }
  };

  return (
    <div className="comment">
      <p>{username}</p>
      <p>{commentText}</p>
      <div className="replies">
        {replyList.map((reply, index) => (
          <Comment key={index} username="User" commentText={reply} />
        ))}
      </div>
      <div className="reply-input">
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
      </div>
      <button onClick={handleReply}>Reply</button>
    </div>
  );
};

export default Comment;

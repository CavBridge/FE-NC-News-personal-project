import { useState } from "react";

const CommentCount = ({ comment_count }) => {
  return (
    <h3 className="article__single_article_comment_count">
      Comment count: {comment_count}
    </h3>
  );
};

export default CommentCount;

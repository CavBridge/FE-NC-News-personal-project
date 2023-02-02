import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Utils/Api-requests";

const AddComment = ({
  newComment,
  setNewComment,
  setBackendComments,
  setNewCommentsAdded,
}) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(false);
  });

  const handleShowCommentBox = () => {
    setShowCommentBox((showCommentsBox) => {
      if (showCommentsBox) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleCommentPost = (event) => {
    event.preventDefault();
    postComment(article_id, newComment, "tickle122")
      .then(() => {
        setSuccess(true);
        setNewCommentsAdded(1);
      })
      .catch((error) => {
        setErr(true);
      });
    setBackendComments((currList) => {
      return [...currList, newComment];
    });
    setNewComment("");
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  if (err) {
    return (
      <p className="article-comment-post__error-message">
        Sorry unable to post comment. Please refresh and try again.
      </p>
    );
  }
  if (success) {
    return <p>Comment posted!</p>;
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="post_comment_section">
        <button className="add_comment_button" onClick={handleShowCommentBox}>
          Add comment
        </button>
        {showCommentBox && (
          <form onSubmit={handleCommentPost}>
            <div className="comment_box">
              <textarea
                required
                className="comment_text_area"
                rows="7"
                cols={30}
                value={newComment}
                onChange={(event) => {
                  setNewComment(event.target.value);
                }}
              ></textarea>
              <button className="post_comment_button" type="submit">
                Post comment
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AddComment;

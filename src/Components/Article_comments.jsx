import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../Utils/Api-requests";
import { deleteComment } from "../Utils/Api-requests";

const ArticleComments = ({ backendComments, setBackendComments }) => {
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [deletedErr, setDeleteErr] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    handleCommentsRefresh();
  }, [article_id]);

  const handleCommentsRefresh = () => {
    fetchComments(article_id)
      .then((commentData) => {
        setBackendComments(commentData.comments);
        setDeleteSuccess(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(
          "Sorry something went wrong, could not load comments. Please try again"
        );
      });
  };

  const handleShowComments = () => {
    setShowComments((showComments) => {
      if (showComments) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleDeleteClicked = (comment_id) => {
    deleteComment(comment_id)
      .then((res) => {
        setDeleteSuccess(true);
        handleCommentsRefresh();
      })
      .catch((err) => {
        setDeleteErr(err);
      });
  };

  if (deletedErr) {
    return (
      <p className="article-comment-post__error-message">
        Sorry unable to Delete comment. Please refresh and try again.
      </p>
    );
  }
  if (deleteSuccess) {
    return <p>Comment Deleted!</p>;
  }

  if (err) return <p className="articlecomments__error-message">{err}</p>;
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="commentsbutton__parent">
          <button className="universalbutton" onClick={handleShowComments}>
            Comments
          </button>
          {showComments && (
            <div className="article_comments">
              {backendComments.map((articleComment) => {
                return (
                  <li className="comment_info" key={articleComment.comment_id}>
                    <p className="articlecomments__comment_author">
                      {" "}
                      Author :{articleComment.author}
                    </p>
                    <p className="articlecomments__comment_body">
                      {articleComment.body}
                    </p>
                    <p className="articlecomments__comment_votes">
                      {" "}
                      Votes: {articleComment.votes}
                    </p>
                    <p className="articlecomments__comment_created_at">
                      {" "}
                      Created at: {articleComment.created_at}
                    </p>
                    {articleComment.author === "tickle122" && (
                      <button
                        className="delete_comment"
                        onClick={() => {
                          handleDeleteClicked(articleComment.comment_id);
                        }}
                      >
                        Delete Comment
                      </button>
                    )}
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
};

export default ArticleComments;

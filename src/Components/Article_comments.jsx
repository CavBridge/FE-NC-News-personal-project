import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../Utils/Api-requests";

const ArticleComments = ({ backendComments, setBackendComments }) => {
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();
  useEffect(() => {
    fetchComments(article_id)
      .then((commentData) => {
        setBackendComments(commentData.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(
          "Sorry something went wrong, could not load comments. Please try again"
        );
      });
  }, [article_id]);

  const handleShowComments = () => {
    setShowComments((showComments) => {
      if (showComments) {
        return false;
      } else {
        return true;
      }
    });
  };

  if (err) return <p className="articlecomments__error-message">{err}</p>;
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="commentsbutton__parent">
          <button
            className="commentsbutton__child"
            onClick={handleShowComments}
          >
            Comments
          </button>
          {showComments && (
            <div className="articlecomments">
              {backendComments.map((articleComment) => {
                return (
                  <li key={articleComment.comment_id}>
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

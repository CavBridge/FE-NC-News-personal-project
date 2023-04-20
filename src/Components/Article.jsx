import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../Utils/Api-requests";
import UpvoteDownvoteButtons from "./Article_votes";
import ArticleComments from "./Article_comments";
import AddComment from "./Add_comment";
import CommentCount from "./Comment_count";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [backendComments, setBackendComments] = useState([]);
  const [newComment, setNewComment] = useState();
  const [newCommentsAdded, setNewCommentsAdded] = useState(0);
  const { article_id } = useParams();
  useEffect(() => {
    fetchArticle(article_id).then((chosenArticle) => {
      setArticle(chosenArticle.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="single_article" key={article.article_id}>
          <h2 className="article__single_article_title">{article.title}</h2>
          <h3 className="article__single_article_topic">
            {" "}
            Topic: {article.topic}
          </h3>
          <h4 className="article__single_article_body">{article.body}</h4>
          <h3 className="article__single_article_author">
            Author: {article.author}
          </h3>
          <h3 className="article__single_article_created_at">
            Created at: {article.created_at.slice(0, 10)}
          </h3>
          <CommentCount
            comment_count={article.comment_count + newCommentsAdded}
          />
          <UpvoteDownvoteButtons votes={article.votes} />
        </div>
        <AddComment
          newComment={newComment}
          setNewComment={setNewComment}
          setBackendComments={setBackendComments}
          currentCommentCount={article.comment_count}
          setNewCommentsAdded={setNewCommentsAdded}
        />
        <ArticleComments
          backendComments={backendComments}
          setBackendComments={setBackendComments}
        />
      </>
    );
  }
};

export default Article;

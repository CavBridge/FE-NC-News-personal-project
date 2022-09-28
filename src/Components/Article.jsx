import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../Utils/Api-requests";
import UpvoteDownvoteButtons from "./Article_votes";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
            Created at: {article.created_at}
          </h3>
          <h3 className="article__single_article_comment_count">
            Comment count: {article.comment_count}
          </h3>
        </div>
        <UpvoteDownvoteButtons votes={article.votes} />
      </>
    );
  }
};

export default Article;

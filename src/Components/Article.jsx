import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticle } from "../Utils/Api-requests";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    fetchArticle(article_id).then((chosenArticle) => {
      console.log(chosenArticle);
      setArticle(chosenArticle.article);
    });
  }, [article_id]);

  return (
    <>
      <div className="topicarticles__button--parent">
        <Link to="/articles/coding">
          <button className="topicarticles__button--child-coding">
            Coding
          </button>
        </Link>
        <Link to="/articles/football">
          <button className="topicarticles__button--child-football">
            Football
          </button>
        </Link>
        <Link to="/articles/cooking">
          <button className="topicarticles__button--child-cooking">
            Cooking
          </button>
        </Link>
      </div>
      <div className="single_article">
        <ul>
          <li key={article.article_id}>
            <h2 className="article__article_title">{article.title}</h2>
            <h3 className="article__article_topic"> Topic: {article.topic}</h3>
            <h4 className="article__article_body">{article.body}</h4>
            <h3 className="article__article_author">
              Author: {article.author}
            </h3>
            <h3 className="article__article_created_at">
              Created at: {article.created_at}
            </h3>
            <b className="article__article_votes">Votes: {article.votes}</b>
            <h3 className="article__article_comment_count">
              Comment count: {article.comment_count}
            </h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Article;

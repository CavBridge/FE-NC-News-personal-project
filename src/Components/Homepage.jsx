import { fetchArticles } from "../Utils/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [articlesData, setArticlesData] = useState([]);
  useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
      setArticlesData(articlesFromApi.articles);
    });
  }, []);

  return (
    <>
      <div className="topicarticles__buton--parent">
        <Link to="/articlesdata/coding">
          <button className="topicarticles__button--child-coding">
            Coding
          </button>
        </Link>
        <Link to="articlesdata/football">
          <button className="topicarticles__button--child-football">
            Football
          </button>
        </Link>
        <Link to="articlesdata/cooking">
          <button className="topicarticles__button--child-cooking">
            Cooking
          </button>
        </Link>
      </div>
      <section className="homepage__all_articles">
        <div className="articledata_article">
          <ul>
            {articlesData.map((article) => {
              return (
                <li key={article.article_id}>
                  <h2 className="article__article_title">{article.title}</h2>
                  <h3 className="article__article_topic">
                    {" "}
                    Topic: {article.topic}
                  </h3>
                  <h3 className="article__article_author">
                    Author: {article.author}
                  </h3>
                  <h3 className="article__article_created_at">
                    Created at: {article.created_at}
                  </h3>
                  <b className="article__article_votes">
                    Votes: {article.votes}
                  </b>
                  <h3 className="article__article_comment_count">
                    Comment count: {article.comment_count}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;

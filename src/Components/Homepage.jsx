import { fetchArticles } from "../Utils/Api-requests";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <section className="homepage__all_articles">
          <div className="articledata_article">
            <ul>
              {articles.map((article) => {
                return (
                  <li key={article.article_id}>
                    <Link
                      className="link_article"
                      to={`/article/${article.article_id}`}
                    >
                      <h2 className="article__article_title">
                        {article.title}
                      </h2>
                    </Link>
                    <h3 className="article__article_topic">
                      {" "}
                      Topic: {article.topic}
                    </h3>
                    <h3 className="article__article_author">
                      Author: {article.author}
                    </h3>
                    <h3 className="article__article_created_at">
                      Created at: {article.created_at.slice(0, 10)}
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
  }
};

export default Homepage;

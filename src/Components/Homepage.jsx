import { fetchArticles } from "../Utils/Api-requests";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import SortArticles from "./Sort_articles";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("created_at");
  const [orderOption, setOrderOption] = useState("descending");

  useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
      setIsLoading(false);
    });
  }, []);

  const ArticleList = articles.map((article) => {
    return (
      <li className="unique_article" key={article.article_id}>
        <Link className="link_article" to={`/article/${article.article_id}`}>
          <h2 className="article__article_title">{article.title}</h2>
        </Link>
        <h3 className="article__article_topic"> Topic: {article.topic}</h3>
        <h3 className="article__article_author">Author: {article.author}</h3>
        <h3 className="article__article_created_at">
          Created at: {article.created_at.slice(0, 10)}
        </h3>
        <b className="article__article_votes">Votes: {article.votes}</b>
        <h3 className="article__article_comment_count">
          Comment count: {article.comment_count}
        </h3>
      </li>
    );
  });

  const sortByDate = (articleArray) => {
    const sortedArticleList = articleArray.sort((a, b) => {
      const article1Date = a.props.children.map((x) => x)[3].props.children[1];
      const article2Date = b.props.children.map((x) => x)[3].props.children[1];
      return article1Date - article2Date;
    });

    return orderOption === "descending"
      ? sortedArticleList
      : sortedArticleList.reverse();
  };

  const sortByComments = (articleArray) => {
    const sortedArticleList = articleArray.sort((a, b) => {
      const article1Date = a.props.children.map((x) => x)[5].props.children[1];
      const article2Date = b.props.children.map((x) => x)[5].props.children[1];
      return article1Date - article2Date;
    });

    return orderOption === "descending"
      ? sortedArticleList
      : sortedArticleList.reverse();
  };

  const sortByVotes = (articleArray) => {
    const sortedArticleList = articleArray.sort((a, b) => {
      const article1Date = a.props.children.map((x) => x)[4].props.children[1];
      const article2Date = b.props.children.map((x) => x)[4].props.children[1];
      return article1Date - article2Date;
    });

    return orderOption === "descending"
      ? sortedArticleList
      : sortedArticleList.reverse();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <SortArticles
          setSortOption={setSortOption}
          setOrderOption={setOrderOption}
        />
        <section className="homepage__all_articles">
          <div className="articledata_article">
            <ul>
              {sortOption === "created_at"
                ? sortByDate(ArticleList)
                : sortOption === "comment_count"
                ? sortByComments(ArticleList)
                : sortOption === "vote_count" && sortByVotes(ArticleList)}
            </ul>
          </div>
        </section>
      </>
    );
  }
};

export default Homepage;

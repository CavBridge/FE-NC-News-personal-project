import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../Utils/Api-requests";
import { Link } from "react-router-dom";

const Topics = () => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    fetchArticlesByTopic(topic).then((topicArticles) => {
      setArticlesByTopic(topicArticles.articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="topic_articles">
          <ul>
            {articlesByTopic.map((article) => {
              return (
                <li className="related_articles" key={article.article_id}>
                  <Link
                    className="link_article"
                    to={`/article/${article.article_id}`}
                  >
                    <h2 className="article__article_title">{article.title}</h2>
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
      </>
    );
  }
};
export default Topics;

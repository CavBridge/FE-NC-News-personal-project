exports.fetchArticles = async () => {
  const res = await fetch("https://cavs-be-nc-news.herokuapp.com/api/articles");
  return res.json();
};

exports.fetchArticlesByTopic = async (topic) => {
  const res = await fetch(
    `https://cavs-be-nc-news.herokuapp.com/api/articles?topic=${topic}`
  );

  return res.json();
};

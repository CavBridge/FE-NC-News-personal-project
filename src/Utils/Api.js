exports.fetchArticles = async () => {
  const res = await fetch("https://cavs-news.herokuapp.com/api/articles");
  return res.json();
};

import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://cavs-be-nc-news.herokuapp.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};

export const fetchArticlesByTopic = (topic) => {
  console.log("topic");
  return newsApi.get("/articles", { params: { topic: topic } }).then((res) => {
    return res.data;
  });
};

export const fetchArticle = (article_id) => {
  console.log("article");
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

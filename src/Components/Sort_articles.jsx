import { useState, useEffect } from "react";
import { fetchArticles } from "../Utils/Api-requests";

const SortArticles = ({ setSortOption, setOrderOption }) => {
  return (
    <>
      <div>
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="created_at">Created At</option>
          <option value="comment_count">Comment Count</option>
          <option value="vote_count">Votes</option>
        </select>
        <select onChange={(e) => setOrderOption(e.target.value)}>
          <option value="descending">Descending</option>
          <option value="ascending">Ascending</option>
        </select>
      </div>
    </>
  );
};
export default SortArticles;

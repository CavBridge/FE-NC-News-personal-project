import { useState, useEffect } from "react";
import { fetchArticles } from "../Utils/Api-requests";

const SortArticles = ({ setSortOption, setOrderOption }) => {
  return (
    <>
      <div className="sortby_dropdown">
        <select
          className="dropdown_1"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="created_at">Created At</option>
          <option value="comment_count">Comment Count</option>
          <option value="vote_count">Votes</option>
        </select>
        <select
          className="dropdown_2"
          onChange={(e) => setOrderOption(e.target.value)}
        >
          <option value="descending">Descending</option>
          <option value="ascending">Ascending</option>
        </select>
      </div>
    </>
  );
};
export default SortArticles;

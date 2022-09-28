import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../Utils/Api-requests";

const UpvoteDownvoteButtons = ({ votes }) => {
  const [vote, setVote] = useState(votes);
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [downvoteCount, setDownvoteCount] = useState(0);
  const { article_id } = useParams();

  const handleUpvote = () => {
    if (upvoteCount === 0) {
      setUpvoteCount(1);
      patchVotes(article_id, vote + 1);
      setVote(vote + 1);
    } else {
      setUpvoteCount(0);
      patchVotes(article_id, vote - 1);
      setVote(vote - 1);
    }
  };

  const handleDownvote = () => {
    if (downvoteCount === 0) {
      setDownvoteCount(-1);
      patchVotes(article_id, vote - 1);
      setVote(vote - 1);
    } else {
      setDownvoteCount(0);
      patchVotes(article_id, vote + 1);
      setVote(vote + 1);
    }
  };

  return (
    <div className="articlevotes__button--parent">
      <button
        className={`articlevotes__button--child-upvote ${
          upvoteCount === 1 ? "upvoteClicked" : ""
        }`}
        onClick={handleUpvote}
      >
        Upvote
      </button>
      <b className="article__single_article_votes"> Votes: {vote}</b>
      <button
        className={`articlevotes__button--child-downvote ${
          downvoteCount === -1 ? "downvoteClicked" : ""
        }`}
        onClick={handleDownvote}
      >
        Downvote
      </button>
    </div>
  );
};

export default UpvoteDownvoteButtons;

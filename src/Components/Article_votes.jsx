import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../Utils/Api-requests";

const UpvoteDownvoteButtons = ({ votes }) => {
  const [vote, setVote] = useState(votes);
  const [isClicked, setIsClicked] = useState(false);
  const { article_id } = useParams();

  const incrementVotes = (increment) => {
    setIsClicked(true);
    let newVoteCount = vote + increment;
    patchVotes(article_id, newVoteCount);
    setVote(newVoteCount);
  };

  return (
    <div className="articlevotes__button--parent">
      <button
        className="articlevotes__button--child-upvote"
        onClick={() => incrementVotes(1)}
        disabled={isClicked}
      >
        Upvote
      </button>
      <b className="article__single_article_votes"> Votes: {vote}</b>
      <button
        className="articlevotes__button--child-downvote"
        onClick={() => incrementVotes(-1)}
        disabled={isClicked}
      >
        Downvote
      </button>
    </div>
  );
};

export default UpvoteDownvoteButtons;

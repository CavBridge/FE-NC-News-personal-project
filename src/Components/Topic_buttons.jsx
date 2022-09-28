import { Link } from "react-router-dom";

const TopicsButton = () => {
  return (
    <div className="topicarticles__buton--parent">
      <Link to="/articles/coding">
        <button className="topicarticles__button--child-coding">Coding</button>
      </Link>
      <Link to="articles/football">
        <button className="topicarticles__button--child-football">
          Football
        </button>
      </Link>
      <Link to="articles/cooking">
        <button className="topicarticles__button--child-cooking">
          Cooking
        </button>
      </Link>
    </div>
  );
};

export default TopicsButton;

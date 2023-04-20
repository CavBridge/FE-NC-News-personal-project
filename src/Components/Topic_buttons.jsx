import { Link } from "react-router-dom";

const TopicsButton = () => {
  return (
    <div className="topicarticles__buton--parent">
      <Link to="/articles/coding">
        <button className="universalbutton">Coding</button>
      </Link>
      <Link to="articles/football">
        <button className="universalbutton">Football</button>
      </Link>
      <Link to="articles/cooking">
        <button className="universalbutton">Cooking</button>
      </Link>
    </div>
  );
};

export default TopicsButton;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="link_header" to="/">
        <header>
          <h1>NC News</h1>
        </header>
      </Link>
    </div>
  );
};

export default Header;

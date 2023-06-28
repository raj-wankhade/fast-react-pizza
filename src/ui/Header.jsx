import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
    </div>
  );
}

export default Header;

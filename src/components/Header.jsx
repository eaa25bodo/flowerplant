import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-plants">My Plants</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <strong className="title">CHuang</strong>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

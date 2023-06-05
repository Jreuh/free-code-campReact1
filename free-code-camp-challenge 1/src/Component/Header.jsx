import ReactLogo from "../images/react.svg";

export default function Header() {
  return (
    <nav className="nav">
      <img className="react-Logo" src={ReactLogo} />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

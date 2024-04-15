import { useState } from "react";
import "./Navbar.scss";
const links = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#project",
  },
  {
    name: "Contacts",
    link: "#contact",
  },
];
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar mobile">
      <h3>Bjoni.dev</h3>
      <div className="navbar__info">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contacts</a>
      </div>

      <div
        className={`hamburger ${showMenu ? "toggle" : ""}`}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>

      <ul className={`test ${showMenu ? "show" : ""}`}>
        {links.map((item, i) => (
          <li key={i}>
            <a onClick={() => setShowMenu(false)} href={`${item.link}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

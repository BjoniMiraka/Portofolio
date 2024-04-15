import "./Footer.scss";
import { Github } from "../../assets/Github";
import { Linkedin } from "../../assets/Linkedin";
export default function Footer() {
  return (
    <footer>
      <div className="footer container">
        <div className="footer__container">
          <h1>Copyright © 2024. All rights are reserved</h1>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              margin: 0,
              gap: 20,
            }}
          >
            <a
              href="https://www.linkedin.com/in/bjoni-miraka-18ab30276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              style={{ fill: "#fff" }}
            >
              <Linkedin />
            </a>
            <a href="https://github.com/Bjonii">
              <Github />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

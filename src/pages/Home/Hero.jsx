import { Github } from "../../assets/Github";
import { Linkedin } from "../../assets/Linkedin";
// import cat from './assets/cat.jpeg';
import "./Hero.scss";
import TechStack from "../../components/TechStack";
// import bjoni from "./assets/bj.jpeg";
export default function Hero() {
  return (
    <main className="hero__container" id="home">
      <div className="hero__container__content container">
        <div className="hero__container__content__hero">
          <div className="hero__container__content__hero__role">
            <h1>Front-End React Developer👋🏻</h1>
            <p>
              Hi, I&apos;m Bjoni Miraka. A passionated Front-End React Developer
              based in Tirana, Albania📍.
            </p>
            <span className="hero__links">
              <a href="https://www.linkedin.com/in/bjoni-miraka-18ab30276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <Linkedin />
              </a>
              <a href="https://github.com/Bjonii">
                <Github />
              </a>
            </span>
          </div>
          <div className="hero__backgoundImage"></div>
        </div>

        <TechStack />
      </div>
    </main>
  );
}

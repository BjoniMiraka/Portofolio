import "./About.scss";
import laptop from "../../assets/laptop.avif";
import frontend from "../../assets/frontEnd.svg";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content container">
        <div style={{ position: "relative" }}>
          <img
            className="work-emoji"
            src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
            alt=""
          />
          <img src={laptop} alt="" className="laptop-back" />

          <span className="rotate-animation-front">
            <img src={frontend} alt="" style={{ position: "absolute" }} />
          </span>
        </div>
        <div className="about__content__text">
          <h1 className="about__content__text--about">About Me</h1>
          <h1 className="about__content__text--title">Front-End Developer</h1>
          <p className="about__content__text--description">
            Junior front-end developer passionate about crafting smooth user
            experiences and clean code. Skilled in HTML, CSS, React, Tailwind
            CSS, React Native, and SCSS, with 8 months of internship and project
            experience. Thrives in team environments, eager to learn, share
            ideas, and build exceptional solutions together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

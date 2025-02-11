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
            Proficient in JavaScript, TypeScript, CSS, SCSS, React, React
            Native, and Tailwind CSS, with a year of experience building clean,
            user-friendly projects. Thrive in team settings, eager to learn,
            collaborate, and create impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

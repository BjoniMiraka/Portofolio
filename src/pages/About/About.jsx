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
            Passionate about building seamless user experiences and writing
            clean, efficient code. Proficient in HTML, CSS, SCSS, React, React
            Native, and Tailwind CSS, with over a year of hands-on experience
            and successful project contributions. Thrive in collaborative
            environments, eager to learn, share ideas, and deliver outstanding
            solutions as part of a dynamic team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

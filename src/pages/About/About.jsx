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
            Hey there! I&apos;m a junior front-end developer who&apos;s all
            about crafting smooth user experiences and keeping the code squeaky
            clean. With skills in HTML, CSS, React, Tailwind CSS, React Native,
            and SCSS, I&apos;m constantly leveling up and ready to take on new
            challenges. Collaboration is my jam—I love working with others,
            sharing ideas, and learning from the team.
            <br />
            <br />
            Bringing 8 months of internship experience and real-world project
            involvement, I&apos;ve honed my problem-solving skills and embraced
            effective collaboration. I thrive in team environments, cherishing
            the opportunity to share insights and learn from my peers.
            Let&apos;s collaborate and create something exceptional together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

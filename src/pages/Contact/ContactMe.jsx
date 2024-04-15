// import { Github } from "./assets/Github";
import { Envelope, MapTrifold } from "@phosphor-icons/react";
import "./ContactMe.scss";

const data = [
  {
    icon: <MapTrifold size={32} />,
    title: "Location",
    text: "Tirana, Albania",
  },
  {
    icon: <Envelope size={32} />,
    title: "Mail",
    text: "mirakabjoni@gmail.com",
  },
];
export default function ContactMe() {
  function sendEmail() {
    const emailAddress = "mirakabjoni@gmail.com";
    window.location.href = "mailto:" + emailAddress;
  }
  return (
    <div id="contact" className="contact__container container">
      <div className="contact__container__text">
        <h1 className="contact__container__text--title">Contact</h1>
        <h3 className="contact__container__text--hit">
          {/* You got somethin&apos; on your mind? Don&apos;t keep it to yourself.
          Hit me up, let&apos;s chat. No need to be bashful, I&apos;ve heard it
          all. */}
          Hey, don&apos;t hold back! Drop me a line down below!
        </h3>
      </div>
      <div className="contact__container__box">
        {data.map((item, i) => (
          <div
            key={i}
            className={"contact__container__box--info"}
            onClick={() => (item.title === "Mail" ? sendEmail() : undefined)}
          >
            <span className="contact__container__box--info__icon">
              {item.icon}
            </span>
            <div>
              <h4>{item.title}</h4>
              <p className={item.title === "Mail" ? "email" : ""}>
                {item.text}
              </p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import chamber from "../assets/chamber.png";
// import purposley from "./assets/purposley.png";
import worldwise from "../assets/worldwise.png";
import purpChat from "../assets/purpChat.png";
import Project from "../components/Project";
import doubloons from "../assets/doubloons.png";
import { Github } from "../assets/Github";
import { ArrowSquareOut } from "@phosphor-icons/react";
export default function Projects() {
  const projects = [
    {
      name: "Purposley",
      description:
        "Purposley is an AI-powered platform designed to help students explore their passions, values, and career aspirations through guided conversations, ultimately assisting them in discovering their purpose and direction in life.",
      link: "https://dev.purposley.com",
      technologies: ["React", "Scss", "TypeScript"],
      image: purpChat,
      index: 1,
      availableProject: <ArrowSquareOut size={25} />,
    },
    {
      name: "Chamberidin",
      description: `
      ChamberedIn is a SaaS platform revolutionizing Commerce Chamber management. It offers seamless event management, centralized communication, elevated member engagement, and expanded reach for chambers of commerce. The platform features cloud-based flexibility, mobile-responsive design, user-centric interface, and top-tier security.`,
      link: "https://app.chamberedin.com/",
      technologies: ["React Native", "TypeScript", "Tailwind"],
      image: chamber,
      index: 2,
      availableProject: <ArrowSquareOut size={25} />,
    },
    {
      name: "Daily Doubloons",
      description: `Daily Doubloons is a React Native app that gamifies treasure hunting, offering three distinct roles for players. Users can create and find treasures on a virtual map, earning real prizes upon discovery. It's an engaging platform that combines adventure with competition, providing users with a unique and interactive experience.`,
      link: "https://play.google.com/store/apps/details?id=com.dailydoubloon.dailydoubloon&hl=en&gl=US",
      technologies: ["React Native", "JavaScript"],
      image: doubloons,
      index: 3,
      width: "400px",
      availableProject: <ArrowSquareOut size={25} />,
    },
    {
      name: "World Wise",
      description: `WorldWise is a solo React project I developed to help users keep track of their travel experiences. The app allows users to take notes about places they've visited and mark them on a map using geolocation. It's a handy tool for documenting and reminiscing about past adventures.`,
      technologies: ["React", "Css"],
      link: "https://github.com/Bjonii/WorldWise",
      image: worldwise,
      index: 4,
      availableProject: <Github />,
    },
  ];
  return (
    <div id="project" className="project container">
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

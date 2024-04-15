import "./Project.scss";
export default function Project(project) {
  const {
    name,
    description,
    technologies,
    link,
    image,
    width,
    availableProject,
  } = project.project;
  return (
    <div className="project__container">
      <a
        href={link}
        className="project__container__image"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image} alt="" style={{ width: width }} />
      </a>
      <div className="project__container__about">
        <h1 className="project__container__about--title">{name}</h1>
        <p
          className="project__container__about--description"
          style={{ textAlign: "center" }}
        >
          {description}
        </p>
        <span className="project__container__about--technologies">
          {technologies.map((tech, techIndex) => (
            <p key={techIndex}>{tech}</p>
          ))}
          {availableProject && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project__container__about--technologies--link"
            >
              {availableProject}
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

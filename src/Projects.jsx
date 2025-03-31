import React from "react";
import { useFetchProjects } from "./fetchProjects";

function Projects() {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
      </div>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projects.map(({ id, img, url, title }) => {
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

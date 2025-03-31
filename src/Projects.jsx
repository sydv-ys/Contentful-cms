import React from "react";
import { useFetchProjects } from "./fetchProjects";

function Projects() {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);

  return <div>Projects</div>;
}

export default Projects;

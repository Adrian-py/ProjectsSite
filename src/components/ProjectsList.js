import React from "react";
import { v4 as uuid } from "uuid";

import ProjectItem from "./ProjectItem";

export default function ProjectsList({ projectsList }) {
  projectsList = projectsList.map((project) => {
    return { id: uuid(), ...project };
  });

  return (
    <div className="projects">
      {projectsList.map((project) => {
        return <ProjectItem key={project.id} project={project} />;
      })}
    </div>
  );
}

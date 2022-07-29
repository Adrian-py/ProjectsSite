import React from "react";

import githubIcon from "../assets/github.svg";
import liveSiteIcon from "../assets/live-site.svg";

export default function ProjectItem({ project }) {
  const imageLink = "/images/" + project.imageLink;

  return (
    <div className="project">
      <img
        src={imageLink}
        alt="Projects Screenshots"
        className="project__image"
      />
      <div className="project__desc">
        <p className="project__title">{project.title}</p>

        <div className="project__details">
          <p className="project__date">{project.date}</p>
          <p className="project__type">{project.type}</p>
        </div>

        <div className="project__buttons">
          <a href={project.githubLink} className="button button--github">
            <img src={githubIcon} alt="" className="button__icon" />
            <p className="button__text">Github</p>
          </a>
          <a href={project.liveSiteLink} className="button button--live-site">
            <img src={liveSiteIcon} alt="" className="button__icon" />
            <p className="button__text">Live Site</p>
          </a>
        </div>

        <p className="project__bio">{project.description}</p>
      </div>
    </div>
  );
}

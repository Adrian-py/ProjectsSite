import React, { useState } from "react";

import logo from "../assets/logo.svg";
import doubleDown from "../assets/double-down.svg";
import alphabetSort from "../assets/alphabetical-sort.svg";
import dateSort from "../assets/date.svg";

const categoryDesc = {
  All: "These are the some of the projects that I came up by my self and got inspiration from Frontend mentor.",
  Personal:
    "These are the some of the projects that I came up by my self, where I came up with the design myself.",
  FEM: "These are the some of the projects that I got inspiration from Frontend mentor, where I tried to recreate a design as best as possible.",
};

export default function Header({ handleFilterList }) {
  const [category, setCategory] = useState("All");
  const [sortby, setSortby] = useState("Alphabetical");

  function handleProjectsCategory(e) {
    handleFilterList(e.target.innerText, sortby);
    setCategory(e.target.innerText);

    // Change chosen category button
    const chosenClass = "categories__button--chosen",
      currentChosen = document.querySelector(`.${chosenClass}`);
    currentChosen.classList.remove(chosenClass);
    e.target.classList.add(chosenClass, sortby);

    // Changing Description
    const headerDesc = document.querySelector(".header__desc");
    headerDesc.innerText = categoryDesc[e.target.innerText];
  }

  function handleProjectsSort(e) {
    setSortby(e.currentTarget.dataset.sort);
    handleFilterList(category, e.currentTarget.dataset.sort);
  }

  return (
    <header className="header">
      <div className="header__top">
        <img src={logo} alt="logo" className="header__logo" />
        <h1 className="header__title">PROJECTS</h1>
      </div>
      <div className="header__buttons">
        <div className="categories">
          <div
            className="categories__button categories__button--chosen"
            onClick={handleProjectsCategory}
          >
            All
          </div>
          <div className="categories__button" onClick={handleProjectsCategory}>
            Personal
          </div>
          <div className="categories__button" onClick={handleProjectsCategory}>
            FEM
          </div>
        </div>

        <div className="sort">
          <p className="sort__title">sort by:</p>
          <div className="sort__button">
            <img src={doubleDown} alt="" className="sort__icon" />
            <p className="sort__text">{sortby}</p>

            <div className="dropdown">
              <div
                className="dropdown__option"
                data-sort="Alphabetical"
                onClick={handleProjectsSort}
              >
                <img src={alphabetSort} alt="" className="dropdown__icon" />
                <p className="dropdown__text">Alphabetical</p>
              </div>
              <div
                className="dropdown__option"
                data-sort="Date"
                onClick={handleProjectsSort}
              >
                <img src={dateSort} alt="" className="dropdown__icon" />
                <p className="dropdown__text">Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__desc">
        These are the some of the projects that I came up by my self and got
        inspiration from Frontend mentor.
      </div>
    </header>
  );
}

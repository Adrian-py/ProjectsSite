import React, { useState } from "react";

import "./styling/css/style.css";
import projectsData from "./data/projects.json";
import Header from "./components/Header";
import ProjectList from "./components/ProjectsList";

const months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export default function App() {
  const [projectsList, setProjectsList] = useState([...projectsData]);
  const [updatedList, setUpdatedList] = useState([...projectsList]);

  function handleFilterList(filter, sort) {
    // Apply both filter and sort every time
    let tempList = [...updatedList];
    tempList = handleCategoryList(tempList, filter);
    tempList = handleSortList(tempList, sort);
    setUpdatedList(tempList);
  }

  function handleCategoryList(tempList, filter) {
    if (filter === "All") {
      tempList = [...projectsList];
      return tempList;
    } else if (filter === "FEM") filter = "Frontend Mentor";
    tempList = projectsList.filter((project) => {
      return project.type === filter ? true : false;
    });
    return tempList;
  }

  function handleSortList(tempList, sortby) {
    if (sortby === "Alphabetical") {
      tempList = tempList.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
    } else if (sortby === "Date") {
      tempList = tempList.sort((a, b) => {
        if (a === b) return 0; // return 0 if the same date

        // Change date from string to numerical
        let first = a.date.split(" "),
          second = b.date.split(" ");
        first[1] = months[first[1]];
        second[1] = months[second[1]];
        first = first.map(Number);
        second = second.map(Number);

        return (
          new Date(second[2], second[1], second[0]).getTime() -
          new Date(first[2], first[1], first[0]).getTime()
        ); // Compare the two dates
      });
    }
    return tempList;
  }

  return (
    <>
      <Header handleFilterList={handleFilterList} />
      <ProjectList projectsList={updatedList} />
    </>
  );
}

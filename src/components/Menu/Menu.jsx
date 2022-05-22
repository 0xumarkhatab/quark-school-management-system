import React from "react";

import Button from "../Button/Button";
import { useState } from "react";
import "./Menu.css";
import StudentClassMenu from "./StudentClassMenu";
import TeacherClassMenu from "./TeacherClassMenu";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { getStudentClasses, getTeacherClasses } from "../../DataManipulation";
function Menu() {
  const [showClassess, setShowClasses] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const user = state?.USER;
  if (user === null || user === undefined) {
    return <Navigate to={"/"} />;
  }
  console.log("show class  ", currentClass);
  let Classes =
    state?.USERTYPE === "student"
      ? getStudentClasses(state?.USER.Identifier, state.CLASSESLIST)
      : getTeacherClasses(state?.USER.Identifier, state.CLASSESLIST);
  let StudentsIdentifiers =
    state?.USERTYPE === "teacher" ? currentClass?.Students : [];
  let Students = [];
  let index = 0;
  let stdList = state.STUDENTSLIST;
  for (let index = 0; index < StudentsIdentifiers?.length; index++) {
    let elem = stdList.filter(
      (item) => item.Identifier === StudentsIdentifiers[index]
    );
    elem.length > 0 && Students.push(elem[0]);
  }

  console.log("Classes got ", Classes);
  return (
    <div className="menu">
      <div className="menu__title">
        <h4>
          Hi ,{user?.Gender === "m" ? "MR. " : "Miss "} <b>{user?.Name}</b>{" "}
        </h4>
      </div>
      <div className="classes__section__action">
        <Button
          key="viewClassButton"
          title="View Classes"
          variant="success"
          onClick={() => {
            setShowClasses((prev) => !prev);
            setCurrentClass(null);
          }}
        />
      </div>
      {showClassess && (
        <div className="classes__list">
          {Classes.map((item) => {
            return (
              <Button
                title={item.Name}
                variant={"primary"}
                onClick={() => {
                  setCurrentClass(null);
                  setTimeout(() => {
                    setCurrentClass(item);
                  }, 100);
                }}
                key={"class" + item.Identifier}
              />
            );
          })}
        </div>
      )}
      {currentClass !== null && (
        <div className="menu__class__title">
          <br />
          <p>
            Class : <b>{currentClass?.Name}</b>
          </p>
        </div>
      )}
      {currentClass !== null && (
        <div className="display__class">
          {state?.USERTYPE === "student" && (
            <StudentClassMenu theClass={currentClass} />
          )}
          {state?.USERTYPE === "teacher" && (
            <TeacherClassMenu Students={Students} theClass={currentClass} />
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;

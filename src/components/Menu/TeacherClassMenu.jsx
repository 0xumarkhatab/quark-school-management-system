import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import AttendenceInstance from "./AttendenceInstance";
import "./TeacherClassMenu.css";

function TeacherClassMenu({ theClass, Students }) {
  const [showBoard, setShowBoard] = useState(false);
  const navigate = useNavigate();
  const teacher = useSelector((state) => state?.USER);

  let attendenceSheet = {
    Identifier: new Date().getMonth() + "__" + new Date().getDay(),
    teacher__id: teacher.Identifier,
    present: [],
    absent: [],
  };

  function markAttendence(type, identifier) {
    if (
      type === "p" &&
      attendenceSheet.present.indexOf(identifier) < 0 &&
      attendenceSheet.absent.indexOf(identifier) < 0
    ) {
      console.log("not present before...\n marking present");
      attendenceSheet.present.push(identifier);
    } else if (
      type === "p" &&
      attendenceSheet.present.indexOf(identifier) === true &&
      attendenceSheet.absent.indexOf(identifier) < 0
    ) {
      console.log("\nAlready Present");
    } else if (
      type === "a" &&
      attendenceSheet.present.indexOf(identifier) < 0 &&
      attendenceSheet.absent.indexOf(identifier) < 0
    ) {
      console.log("not absent before...\n marking absent");
      attendenceSheet.absent.push(identifier);
    } else if (
      type === "a" &&
      attendenceSheet.present.indexOf(identifier) < 0 &&
      attendenceSheet.absent.indexOf(identifier) === true
    ) {
      console.log("\nAlready Absent");
    }
    console.log(" \nthe current attendence sheet \n", attendenceSheet);
  }
  function clearAttendence(Identifier) {
    console.log("clearing ", Identifier);
    let newAbsents = attendenceSheet?.absent?.filter(
      (item) => item !== Identifier
    );
    let newPresents = attendenceSheet?.present?.filter(
      (item) => item !== Identifier
    );
    attendenceSheet.absent = [...newAbsents];
    attendenceSheet.present = [...newPresents];
    console.log(" \nthe current attendence sheet \n", attendenceSheet);
  }
  return (
    <div className="teacher__class__menu">
      <div className="teacher__class__menu__buttons">
        <Button
          variant={"success"}
          title={"Take Roll Call"}
          onClick={() => {
            setShowBoard((prev) => !prev);
          }}
        />
      </div>

      {showBoard && (
        <div className="teacher__class__menu__rollcall">
          <div className="teacher__class__menu__rolcall__date">
            <p>{new Date().toString().slice(0, 15)}</p>
          </div>
          <div className="teacher__class__menu__rollcall__list">
            {Students.map((std) => {
              return (
                <AttendenceInstance
                  markAttendence={markAttendence}
                  changeAttendenceStatus={clearAttendence}
                  student={std}
                />
              );
            })}
          </div>
          <div className="save__button">
            <Button
              id="saveButton"
              key={"savebutton"}
              title={"Save Attendence"}
              variant={"success"}
              onClick={() => {
                setShowBoard(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherClassMenu;

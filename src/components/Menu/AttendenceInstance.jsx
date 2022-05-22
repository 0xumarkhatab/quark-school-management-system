import React from "react";
import { Navigate } from "react-router";
import Button from "../Button/Button";
import "./AttendenceInstance.css";
function AttendenceInstance({
  student,
  markAttendence,
  changeAttendenceStatus,
}) {
  console.log("got studen to display ", student);
  return (
    <div className="attendenceInstance">
      <div className="attendenceInstance__left">
        <p>{student?.Identifier}</p>
        <p>{student?.Name}</p>
      </div>
      <div className="attendenceInstance__right">
        <Button
          id={"present" + student?.Identifier}
          onClick={() => {
            document.getElementById(
              "absent" + student?.Identifier
            ).style.display = "none";

            markAttendence("p", student?.Identifier);
          }}
          variant={"information"}
          title={"Present"}
        />
        <Button
          id={"absent" + student?.Identifier}
          onClick={() => {
            document.getElementById(
              "present" + student?.Identifier
            ).style.display = "none";
            markAttendence("a", student?.Identifier);
          }}
          variant={"danger"}
          title={"Absent"}
        />
        <Button
          onClick={() => {
            changeAttendenceStatus(student?.Identifier);
            document.getElementById(
              "present" + student?.Identifier
            ).style.display = "flex";
            document.getElementById(
              "absent" + student?.Identifier
            ).style.display = "flex";
          }}
          variant={"success"}
          title={"Change "}
        />
      </div>
    </div>
  );
}

export default AttendenceInstance;

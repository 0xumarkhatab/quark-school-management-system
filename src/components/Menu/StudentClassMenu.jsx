import React, { useState } from "react";
import Button from "../Button/Button";

import "./StudentClassMenu.css";
function StudentClassMenu({ theClass }) {
  const [progress, setProgress] = useState(null);
  const [marks, setMarks] = useState(null);
  const [attendence, setAttendence] = useState(null);

  return (
    <div className="student__class__menu">
      <div className="student__class__menu__Item">
        <Button
          key="viewAttendence"
          title="View Attendence"
          onClick={() => {
            setAttendence(Math.floor(Math.random() * 100) % 100);
          }}
        />
        {attendence !== null && (
          <div className="bar attendence__bar">{attendence}%</div>
        )}
      </div>

      <div className="student__class__menu__Item">
        <Button
          key="viewMarks"
          title="View Marks"
          onClick={() => {
            setMarks(Math.floor(Math.random() * 100) % 100);
          }}
        />
        {marks !== null && <div className="bar marks__bar">{marks}%</div>}
      </div>

      <div className="student__class__menu__Item">
        <Button
          key="viewProgress"
          title="View Progress"
          onClick={() => {
            setProgress(Math.floor(Math.random() * 100) % 100);
          }}
        />
        {progress !== null && (
          <div className="bar progress__bar">{progress}%</div>
        )}
      </div>
    </div>
  );
}

export default StudentClassMenu;

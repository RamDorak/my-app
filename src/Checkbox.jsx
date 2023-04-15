import React, { useState } from "react";

function Checkbox({ checkboxNo, date }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);

    const attendanceData = {
      checkboxNo: checkboxNo,
      date: date,
      status: event.target.checked ? 'Present' : 'Absent',
    };

    console.log(attendanceData);

    fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendanceData),
    });
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      {isChecked ? "Present" : "Absent"}
    </label>
  );
}

export default Checkbox;

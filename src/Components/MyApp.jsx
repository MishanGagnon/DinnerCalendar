import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "./DateForm";
import DaysGuests from "./DaysGuests";
import moment from "moment";

function MyApp() {
  const [value, onChange] = useState(new Date());
  const [dateInfo, changeDateInfo] = useState([]);
  const [nameChanged, setNameChanged] = useState(0);

  useEffect(() => {
    console.log(dateInfo);
  }, [dateInfo]);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <Form
        value={moment(value).format("MMMM Do YYYY")}
        dateInfo={dateInfo}
        changeDateInfo={changeDateInfo}
        nameChanged={nameChanged}
        setNameChanged={setNameChanged}
      />
      <DaysGuests
        dateInfo={dateInfo}
        value={moment(value).format("MMMM Do YYYY")}
      />
    </div>
  );
}

export default MyApp;

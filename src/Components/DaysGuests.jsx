import React, { useEffect, useState } from "react";

const DaysGuests = (props) => {
  const [reset, setReset] = useState(0);
  const dateInfo = props.dateInfo;
  const value = props.value;
  const valueIndex = props.dateInfo.findIndex((e) => e.date === value);

  useEffect(
    (reset) => {
      reset = reset + 1;
    },
    [dateInfo]
  );

  return (
    <div>
      <h1>Hello</h1>
      {dateInfo[valueIndex] !== undefined ? (
        <ul>
          {dateInfo[valueIndex].name.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      ) : (
        <h1> No one coming to dinner today</h1>
      )}
    </div>
  );
};

export default DaysGuests;

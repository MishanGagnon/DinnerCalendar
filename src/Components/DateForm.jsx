import React, { useState, useEffect } from "react";

const Form = (props) => {
  const value = props.value;
  const changeDateInfo = props.changeDateInfo;
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const nameChanged = props.nameChanged;
  const setNameChanged = props.setNameChanged;
  const handleSubmit = () => {
    if (props.dateInfo.length === 0) {
      changeDateInfo([
        ...props.dateInfo,
        { date: value, name: [name], dinner: checked }
      ]);
    } else {
      const tempIndex = props.dateInfo.findIndex((e) => e.date === value);
      if (tempIndex !== -1) {
        if (
          props.dateInfo[tempIndex].name.findIndex((e) => e === name) === -1
        ) {
          console.log(tempIndex);
          props.dateInfo[tempIndex].name.push(name);
          setNameChanged(nameChanged + 1);
        }
      } else {
        changeDateInfo([
          ...props.dateInfo,
          { date: value, name: [name], dinner: checked }
        ]);
      }
    }
  };

  useEffect(() => {
    console.log(props.dateInfo);
  }, [props.dateInfo]);

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      ></input>
      <h3>Not Attending Dinner</h3>
      <input
        type="checkbox"
        onChange={() => {
          setChecked(!checked);
        }}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;

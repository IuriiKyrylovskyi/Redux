import React, { useState } from "react";

const CreateTaskInput = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
    // createNewTask;
    // postToServerText;
  }

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputText}
        onChange={handleChange}
        //
      />
      <button className="btn create-task__btn">Create</button>
    </div>
  );
};

export default CreateTaskInput;

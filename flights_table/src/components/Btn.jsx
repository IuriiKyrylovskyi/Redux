import React, { useState } from "react";

const Btn = ({ icon }) => {
  const [activeArr, setActiveArr] = useState(true);
  // const [activeDep, setActiveDep] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActiveArr(!activeArr);
    // setActiveDep(!activeDep);
  };

  const btnClassName = activeArr ? "btn _active" : "btn";

  return (
    <button
      className={btnClassName}
      onClick={handleClick}
      value={activeArr}
      //
    >
      {icon} Departures
    </button>
  );
};

export default Btn;

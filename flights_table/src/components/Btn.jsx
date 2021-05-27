import React from "react";
import useLocalStorage from "../functions/useLocalStorage";

const Btn = ({ icon }) => {
  // const [activeArr, setActiveArr] = useState(true);
  const [activeArr, setActiveArr] = useLocalStorage("isActiveArr", true);

  const handleClick = (e) => {
    e.preventDefault();
    setActiveArr(!activeArr);
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

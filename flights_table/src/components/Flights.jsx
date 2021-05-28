import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import useLocalStorage from "../functions/useLocalStorage";
import { useRouter } from "../functions/useRouter";
import TableButtons from "./TableButtons";
import TableHeader from "./TableHeader";
import FlightsTable from "./FlightsTable";

const Flights = ({ search }) => {
  // const [isDepartures, setIsDepartures] = useState(false);
  const [isDepartures, setIsDepartures] = useLocalStorage("isDepartures", false); // const [activeArr, setActiveArr] = useLocalStorage("isActiveArr", true);
  //
  const router = useRouter();
  // // Get value from query string (?postId=123) or route param (/:postId)
  // console.log(router.query.ID);
  // // Get current pathname
  // console.log(router.pathname);

  const year = new Date().getUTCFullYear();
  const getMonth = 1 + new Date().getMonth();
  const month = getMonth.toString().length === 1 ? "0" + getMonth : getMonth;
  const dateNumber = new Date().getDate();

  console.log(!search);

  const flightPath = `/?name=${search.text}`;
  const path = !isDepartures ? `/departures/${month}-${dateNumber}-${year}` + (!search || search.text === "" ? "" : flightPath) : `/arrivals/${month}-${dateNumber}-${year}` + (!search || search.text === "" ? "" : flightPath);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDepartures(!isDepartures);
    router.push(path);
  };

  // const mainPath = "arrivals"// ? !isDepartures : "departures";

  // const path = mainPath ? !search : mainPath + flightPath;
  // console.log(search.text);
  // console.log(path);
  return (
    <div className="flights">
      <TableButtons
        isDepartures={isDepartures}
        handleDepartures={handleClick}
        flightPath={flightPath}
        //
      />

      <div className="flights__content">
        <TableHeader />
        <div className="flights__table">
          <FlightsTable isDepartures={isDepartures} />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    search: state.flightsList.flight,
  };
};

export default connect(mapState)(Flights);

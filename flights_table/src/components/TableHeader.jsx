import React from "react";
import TableCeil from "./TableCeil";

const TableHeader = () => {
  const tableCeils = [
    {
      id: "1",
      text: "Terminal",
    },
    {
      id: "2",
      text: "Local Time",
    },
    {
      id: "3",
      text: "Destination",
    },
    {
      id: "4",
      text: "Status",
    },
    {
      id: "5",
      text: "Airline",
    },
    {
      id: "6",
      text: "Flight",
    },
  ];
  return (
    <>
      {tableCeils.map((ceil) => {
        return <TableCeil key={ceil.id} text={ceil.text} />;
      })}
    </>
  );
};

export default TableHeader;

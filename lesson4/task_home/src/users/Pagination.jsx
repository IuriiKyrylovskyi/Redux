import React from "react";

function Pagination( {goPrev, goNext, currentPage, totalItems, itemsPerPage}) {
  return (
    <div className="pagination">
      <button className="btn">←</button>
      <span className="pagination__page">1{currentPage}</span>
      <button className="btn">→</button>
    </div>
  );
}

export default Pagination;

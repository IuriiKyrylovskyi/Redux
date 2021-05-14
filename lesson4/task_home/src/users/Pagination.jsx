import React from "react";

function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  let isPrevPageAvailable = currentPage === 0;
  let isNextPageAvailable = currentPage === totalItems;



  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
        ←
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
        →
      </button>
    </div>
  );
}

export default Pagination;

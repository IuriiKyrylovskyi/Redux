import React from "react";

function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  let isPrevPageAvailable = currentPage !== 0;
  // let isNextPageAvailable = totalItems % itemsPerPage === 0 ? currentPage + 1 !== parseInt(totalItems / itemsPerPage) : currentPage !== parseInt(totalItems / itemsPerPage);
  let isNextPageAvailable = currentPage + 1 !== Math.ceil(totalItems / itemsPerPage);
  console.log("currentPage", currentPage + 1);
  // console.log("totalItems", totalItems);
  // console.log("itemsPerPage", itemsPerPage);
  // console.log("isNextPageAvailable", isNextPageAvailable);
  console.log(parseInt(totalItems / itemsPerPage));

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && "→"}
      </button>
    </div>
  );
}

export default Pagination;

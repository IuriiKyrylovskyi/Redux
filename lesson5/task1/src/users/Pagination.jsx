import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const lastPage = Math.ceil((totalItems) / itemsPerPage);

  let isPrevPageAvailable = true ? currentPage === 0 : false;
  let isNextPageAvailable = true ? currentPage === lastPage - 1 : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
        {!isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
        {!isNextPageAvailable && "→"}
      </button>
    </div>
  );
};

export default Pagination;

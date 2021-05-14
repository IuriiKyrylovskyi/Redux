import React from "react";

function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  let isPrevPageAvailable = currentPage !== 0;
  let isNextPageAvailable = currentPage + 1 !== Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      {/* <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && "→"}
      </button> */}

      {!isPrevPageAvailable ? (
        <button className="btn" disabled={true}></button>
      ) : (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      )}

      <span className="pagination__page">{currentPage + 1}</span>

      {!isNextPageAvailable ? (
        <button className="btn" disabled={true}></button>
      ) : (
        <button className="btn" onClick={goNext}>
          →
        </button>
      )}
    </div>
  );
}

export default Pagination;

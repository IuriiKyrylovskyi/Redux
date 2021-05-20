import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const lastPage = Math.floor(totalItems / itemsPerPage);

  // let isPrevPageAvailable = currentPage;
  // let isNextPageAvailable = currentPage;
  let isPrevPageAvailable = true ? currentPage !== 0 : false;
  let isNextPageAvailable = true ? currentPage !== lastPage : false;

  const next = () => {
    console.log("next");
    goNext();
  };
  return (
    <div className="pagination">
      {/* {isPrevPageAvailable === 0 ? (
        <button className="btn" disabled={true} />
      ) : (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      )}

      <span className="pagination__page">{currentPage + 1}</span>

      {isNextPageAvailable === lastPage ? (
        <button className="btn" disabled={true} />
      ) : (
        <button className="btn" onClick={next}>
          →
        </button>
      )} */}

      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={next} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && "→"}
      </button>
    </div>
  );
};

export default Pagination;

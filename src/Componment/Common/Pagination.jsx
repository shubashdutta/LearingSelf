import React from "react";

const Pagination = ({
  currentPage,
  totalPage,
  onPageChange,
  onNextPage,
  onPrevPage,
}) => {
  const startPage = Math.max(1, currentPage - 1);

  const endPage = Math.max(totalPage, startPage + 2);

  const pageNumberDisplay = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + 1
  );
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => {
          onPrevPage();
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          });
        }}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumberDisplay?.map((page) => (
        <button
          type="button"
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => {
            onPageChange(page);
            window.screenTop({
              behavior: "smooth",
              top: 0,
            });
          }}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => {
          onNextPage();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

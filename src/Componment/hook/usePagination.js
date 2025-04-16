import React, { useState } from "react";

const usePagination = (initPage = 1, itemPerPages = 10) => {
  const [currentPage, setCurrentPage] = useState(initPage);
  const [itemPerPage] = useState(itemPerPage);

  const [totalPage, setTotalPage] = useState(0);

  const handleNextPage = () => {
    currentPage > 1 && setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return {
    currentPage,
    setCurrentPage,
    itemPerPage,
    totalPage,
    setTotalPage,
    handleNextPage,
    handlePageChange,
    handlePrevPage,
  };
};

export default usePagination;

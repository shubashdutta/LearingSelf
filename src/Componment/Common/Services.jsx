import React from "react";
import useTitle from "../hook/useTitle";
import usePagination from "../hook/usePagination";

const Services = () => {
  useTitle("Services");

  const {
    currentPage,
    handleNextPage,
    handlePageChange,
    handlePrevPage,
    itemPerPage,
    setCurrentPage,
    setTotalPage,
  } = usePagination();
  return <div>Services</div>;
};

export default Services;

import React from "react";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";

const tableWithPagination = ({
  currentPage,
  totalPage,
  handlePageChange,
  handleNextChange,
  handlePrevPage,
  columns,
  TableBodyComponent,
  pagination = true,

  tableData,
}) => {
  return (
    <section>
      <section>
        <table>
          <TableHeader columns={columns} />
          <TableBodyComponent />
        </table>

        {tableData?.length === 0 && (
          <div>
            <span>No data found</span>
          </div>
        )}

        {tableData?.length > 0 && pagination && (
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            onPageChange={handlePageChange}
            onNextPage={handleNextChange}
            onPrevPage={handlePrevPage}
          />
        )}
      </section>
    </section>
  );
};

export default tableWithPagination;

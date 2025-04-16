import React from "react";

const TableHeader = ({ column }) => {
  return (
    <thead>
      <tr>
        {column?.map((column, index) => (
          <th className={column === "SN" ? "w-5" : ""} key={index}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

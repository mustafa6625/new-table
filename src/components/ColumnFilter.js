import React from "react";

function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        className="form-control"
        style={{ width: "80%", margin: "auto" }}
        placeholder="Filter Column"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default ColumnFilter;

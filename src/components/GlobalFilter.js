import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);
  return (
    <span>
      <input
        className="form-control"
        placeholder="Search"
        style={{ width: "350px", margin: "14px 14px" }}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </span>
  );
}

export default GlobalFilter;

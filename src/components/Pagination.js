import React from "react";

function Pagination({
  totalData,
  paginate,
  nextPage,
  prevPage,
  disableNext,
  disablePrev,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalData; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ color: "white" }}>
      {/* <ul>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul> */}
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            onClick={() => prevPage()}
            className="page-link"
            style={{ color: "#04aa6d" }}
            disabled={disablePrev}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button
              onClick={() => paginate(num - 1)}
              className="page-link"
              style={{ color: "#04aa6d" }}
            >
              {num}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={() => nextPage()}
            className="page-link"
            style={{ color: "#04aa6d" }}
            disabled={disableNext}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;

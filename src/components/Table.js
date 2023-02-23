// import React, { useMemo, useRef } from "react";
// import {
//   useTable,
//   useGlobalFilter,
//   useFilters,
//   usePagination,
// } from "react-table";
// import classes from "./Table.module.css";
// import GlobalFilter from "./GlobalFilter";
// import ColumnFilter from "./ColumnFilter";
// import { CSVLink } from "react-csv";

// import PaginationComponent from "./PaginationComponent";

// function Table({ data1, excelData, column, numberOfRows }) {
//   const columns = useMemo(() => column, []);
//   const data = useMemo(() => data1, []);

//   const defaultColumn = useMemo(() => {
//     return {
//       Filter: ColumnFilter,
//     };
//   }, []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     // rows,
//     page,
//     // nextPage,
//     // previousPage,
//     // canNextPage,
//     // canPreviousPage,
//     pageOptions,
//     gotoPage,
//     pageCount,
//     prepareRow,
//     state,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns: columns,
//       data: data,
//       initialState: { pageSize: numberOfRows ? numberOfRows : 10 },
//       // initialState: { pageIndex: 0 },
//       defaultColumn,
//     },

//     useFilters,
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex, pageSize } = state;

//   return (
//     <>
//       <div
//         className="d-flex justify-content-between align-items-center"
//         style={{ marginRight: "10px" }}
//       >
//         <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
//         <CSVLink data={excelData}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="48"
//             width="48"
//             style={{ stroke: "#fff" }}
//           >
//             <path d="M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z" />
//           </svg>
//         </CSVLink>
//       </div>
//       <table className={classes.table} {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render("Header")}
//                   <div>{column.canFilter ? column.render("Filter") : null}</div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 d-flex flex-column justify-content-center align-content-center">
//         <p style={{ margin: "6px auto" }}>
//           Page{" "}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{" "}
//         </p>
//         <PaginationComponent
//           // pageOptions={pageOptions}
//           pagesCount={pageCount}
//           currentPage={pageIndex + 1}
//           setCurrentPage={gotoPage}
//         />
//       </div>
//     </>
//   );
// }

// export default Table;

import React, { useMemo, useRef } from "react";
import { BsDownload, BsSearch, BsFilter } from "react-icons/bs";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import classes from "./Table.module.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { CSVLink } from "react-csv";

import PaginationComponent from "./PaginationComponent";

function Table({ header, data1, excelData, column, numberOfRows }) {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => data1, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    page,
    // nextPage,
    // previousPage,
    // canNextPage,
    // canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: columns,
      data: data,
      initialState: { pageSize: numberOfRows ? numberOfRows : 10 },
      // initialState: { pageIndex: 0 },
      defaultColumn,
    },

    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className={`${classes.marginAuto} ${classes.tableBackground}`}>
        <div
          className={`d-flex justify-content-between align-items-center ${classes.paddingAndHeight}`}
        >
          <h2 className={classes.h2}>{header}</h2>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ gap: "18px" }}
          >
            <BsSearch className={classes.icon} />
            <CSVLink data={excelData}>
              <BsDownload className={classes.icon} />
            </CSVLink>
            <BsFilter className={classes.icon} />
          </div>
        </div>
        {/* <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginRight: "10px" }}
      >
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <CSVLink data={excelData}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            style={{ stroke: "#fff" }}
          >
            <path d="M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z" />
          </svg>
        </CSVLink>
      </div> */}
        <table className={classes.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    {/* <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className={`mt-3 d-flex justify-content-between align-items-center ${classes.tableBottom}`}
        >
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ gap: "36px" }}
          >
            <p>
              Page <strong>{pageIndex + 1}</strong> of{" "}
              <strong>{pageOptions.length}</strong>
            </p>
            <PaginationComponent
              // pageOptions={pageOptions}
              pagesCount={pageCount}
              currentPage={pageIndex + 1}
              setCurrentPage={gotoPage}
            />
          </div>
          <button className={classes.buttonViewAll}>View All</button>
        </div>
      </div>
    </>
  );
}

export default Table;

{
  /* <span>
Go to page:{" "}
<input
  type="number"
  defaultValue={pageIndex + 1}
  onChange={(e) => {
    const pageNumber = e.target.value
      ? Number(e.target.value) - 1
      : 0;
    gotoPage(pageNumber);
  }}
  style={{ width: "50px" }}
/>
</span>
<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
{"<<"}
</button>
<button onClick={() => previousPage()} disabled={!canPreviousPage}>
Previous &larr;
</button>
<span>
Page{" "}
<strong>
  {pageIndex + 1} of {pageOptions.length}
</strong>{" "}
</span>
<button onClick={() => nextPage()} disabled={!canNextPage}>
Next &rarr;
</button>
<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
{">>"}
</button> */
}

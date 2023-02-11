import Table from "./components/Table";
import mock_data from "./components/mock-data.json";
import { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";

function App() {
  const [data, setData] = useState(mock_data);
  const [data2, setData2] = useState(MOCK_DATA);

  let excelData = data.map(({ account, event, entered_by, event_date }) => {
    return { account, event, entered_by, event_date };
  });
  let excelData2 = data2.map(({ first_name, last_name, gender }) => {
    return { first_name, last_name, gender };
  });

  // Set disableFilter to true if a particular column does not require a Filter input
  const COLUMNS = [
    {
      Header: "Account",
      accessor: "account",
      // disableFilters: true,
    },
    { Header: "Description", accessor: "event" },
    { Header: "User", accessor: "entered_by" },
    { Header: "Date", accessor: "event_date" },
  ];

  const COLUMN2 = [
    { Header: "First Name", accessor: "first_name" },
    { Header: "Gender", accessor: "gender" },
  ];

  // Enter url below to fetch data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("");
  //     setData(response.data)
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Table
        data1={data}
        excelData={excelData}
        column={COLUMNS}
        numberOfRows={5}
      />
      <Table
        data1={data2}
        excelData={excelData2}
        column={COLUMN2}
        numberOfRows={3}
      />
    </>
  );
}

export default App;

// function Button({value}) {
//   return <button>{value}</button>
// }
// const [data, setData] = useState();
// const [data2, setData2] = useState(
//   MOCK_DATA.map((el, i) => {
//     let item2 = JSON.parse(JSON.stringify(el));
//     item2.gender = <Button value={el.gender} key={i} />;
//     return item2;
//   })
// );

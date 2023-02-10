import "./App.css";
import Table from "./components/Table";
import mock_data from "./components/mock-data.json";
import { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";

function Button({ value }) {
  return <button>{value}</button>;
}

function App() {
  const [data, setData] = useState(mock_data);
  const [data2, setData2] = useState(MOCK_DATA);

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
      <Table data1={data} column={COLUMNS} numberOfRows={5} />
      <Table data1={data2} column={COLUMN2} numberOfRows={3} />
    </>
  );
}

export default App;

// const [data, setData] = useState();
// const [data2, setData2] = useState(
//   MOCK_DATA.map((el, i) => {
//     let item2 = JSON.parse(JSON.stringify(el));
//     item2.gender = <Button value={el.gender} key={i} />;
//     return item2;
//   })
// );

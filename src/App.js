import "./App.css";
import Table from "./components/Table";
import mock_data from "./components/mock-data.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(mock_data);

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
      <Table data1={data} column={COLUMNS} numberOfRows={5} />;
    </>
  );
}

export default App;

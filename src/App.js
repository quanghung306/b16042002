import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContainer from "./container/FormContainer";
import TableContainer from "./container/TableContainer";
import { Spinner } from "reactstrap";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [isLoang, setIsLoang] = useState(false);
  useEffect(() => {
    if (dataList?.length > 0) {
      localStorage.setItem("dataList", JSON.stringify(dataList));
    }
  }, [dataList]);

  useEffect(() => {
    const dataInlocal = localStorage.getItem("dataList");
    if (dataInlocal) {
      setIsLoang(true);
      setTimeout(() => {
        setDataList(JSON.parse(dataInlocal));
        setIsLoang(false);
      }, 3000);
    }
  }, []);

  const onSubmitData = (data) => {
    setDataList([...dataList, data]);
  };
  return (
    <div>
      <FormContainer onSubmitData={onSubmitData} />
      {isLoang ? (
        <Spinner>Loading..</Spinner>
      ) : (
        <TableContainer datalist={dataList} />
      )}
    </div>
  );
};
export default App;

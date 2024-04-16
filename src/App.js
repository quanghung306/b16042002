import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContainer from "./container/FormContainer";
import TableContainer from "./container/TableContainer";

const App = () => {
  const [dataList, setDataList] = useState([
    {
      id:Math.random(),
      email:"hung@gmail.com",
      password:"12",
      address:"fe",
      phoneNumber:"1232"

    }
  ]);
  return (
    <div>
      <FormContainer />
      <TableContainer datalist={dataList} />
    </div>
  );
};
export default App;

import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContainer from "./conteinar/FormContainer";
import TableContainer from "./conteinar/TableContainer";

const App = () => {
  const [dataList, setDataList] = useState([]);
  return (
    <div>
      <FormContainer />
      <TableContainer/>
    </div>
  );
};
export default App;

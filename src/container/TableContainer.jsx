import React from "react";
import { Button, Table } from "reactstrap";

const TableContainer = ({ datalist,onDeleteData }) => {
  const onDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (isConfirmed) {
      const updatedDataList = datalist.filter(data => data.id !== id);
      localStorage.removeItem("dataList", JSON.stringify(updatedDataList));
      onDeleteData(updatedDataList); 
      alert("Item deleted successfully."); 
    }
  };
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {datalist.map((data, index) => (
            <tr key={data.id}>
              <th scope="row">{index + 1}</th>
              <th>{data.email}</th>
              <th>{data.password}</th>
              <th>{data.address}</th>
              <th>{data.phoneNumber}</th>
              <td >
                <Button onClick={() => onDelete(data.id)}>delete</Button>
                <Button >Edit</Button>
                
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </Table>
    </>
  );
};

export default TableContainer;

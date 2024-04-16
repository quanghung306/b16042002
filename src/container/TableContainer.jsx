import React from "react";
import { Button, Table } from "reactstrap";

const TableContainer = ({datalist}) => {
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
        {
          datalist.map((data,index) =>(
            <tr key={data.id}>
              <th scope="row">{index+1}</th>
              <th>{data.email}</th>
              <th>{data.password}</th>
              <th>{data.address}</th>
              <th>{data.phoneNumber}</th>
              <td>
                <Button>delete</Button>
              </td>
            </tr>
          ))};
      </tbody>
    </Table>
    </>
  );
};

export default TableContainer;

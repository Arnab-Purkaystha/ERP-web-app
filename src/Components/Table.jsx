import React from "react";

const Table = () => {
  return (
    <div
      className=" text-dark"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h1 className="container text-center mb-5">Product Sales Table</h1>
      <table className="table table-bordered table-striped table-hover table-sm table-primary container text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Product Name</th>
            <th scope="col">Total Sales</th>
            <th scope="col">Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "50px" }}>
            {" "}
            {/* Adjust the height value as needed */}
            <th scope="row">Jan</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            {" "}
            {/* Adjust the height value as needed */}
            <th scope="row">Jan</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            {" "}
            {/* Adjust the height value as needed */}
            <th scope="row">Jan</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            {" "}
            {/* Adjust the height value as needed */}
            <th scope="row">Jan</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            {" "}
            {/* Adjust the height value as needed */}
            <th scope="row">Jan</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            {" "}
            {/* Adjust the height value as needed */}
            <th scope="row">Jan</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            <th scope="row">Feb</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
          <tr style={{ height: "50px" }}>
            <th scope="row">March</th>
            <td>Mark</td>
            <td>5000</td>
            <td>5,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

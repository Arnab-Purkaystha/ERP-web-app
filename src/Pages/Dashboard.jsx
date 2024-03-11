import React from "react";
import Cards from "../Components/Cards";
import Form from "../Components/Form";
import Table from "../Components/Table";
import { Chart } from "react-google-charts";
import Graph from "../Components/Graph";
import PieChart from "../Components/PieChart";

const Dashboard = () => {
  return (
    <>
    {/* Hero banner as title */}
      <header style={{ paddingLeft: 0 }}>
        <div className=" text-center bg-image">
          <div className="mask"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)",
              height: "300px",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
              <h1 className="card-title pt-3 mb-5 font-bold"><strong>Resource Planning</strong></h1>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Cards />
      <Table />
      <div className="row" style={{backgroundColor: 'rgb(255, 255, 255)',margin: '0px', padding: '20px', width: "100%", borderRadius:'20px' }}>
        <div className="col-md-12 col-lg-6">
          <Graph />
        </div>
        <div className="col-md-12 col-lg-6">
          <PieChart />
        </div>
      </div>
      <Form />
    </>
  );
};

export default Dashboard;

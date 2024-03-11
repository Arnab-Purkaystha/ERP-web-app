//Cards for Dashboard
import React from "react";
import "../Styles/Cards.css";
const Cards = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <i className="fa fa-cart-plus f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-green order-card">
            <div className="card-block">
              <h6 className="m-b-20">Total Products</h6>
              <h2 className="text-right">
                <i className="fa fa-rocket f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Total Catagories<span className="f-right">35</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-yellow order-card">
            <div className="card-block">
              <h6 className="m-b-20">New Projects Received</h6>
              <h2 className="text-right">
                <i className="fa fa-refresh f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Projects<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-pink order-card">
            <div className="card-block">
              <h6 className="m-b-20">Monthly Sales</h6>
              <h2 className="text-right">
                <i className="fa fa-credit-card f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Increased By<span className="f-right">15%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

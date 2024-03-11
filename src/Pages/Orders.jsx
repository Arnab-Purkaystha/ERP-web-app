import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Cards from "../Components/Cards";

// Mock orders data for initial rendering
const mockOrders = [
  {
    id: 1,
    customerName: "John Doe",
    orderDate: "2024-03-09",
    status: "Pending",
    items: ["Item 1", "Item 2"],
  },
  {
    id: 2,
    customerName: "Jane Doe",
    orderDate: "2024-03-08",
    status: "Shipped",
    items: ["Item 3", "Item 4"],
  },
  // Add more mock orders as needed
];

const Orders = () => {
  // State to manage the list of orders
  const [orders, setOrders] = useState(mockOrders);
  // State to store the selected order for details view
  const [selectedOrder, setSelectedOrder] = useState(null);
  // State to store the selected date on the calendar
  const [selectedDate, setSelectedDate] = useState(new Date());
  // State to control the display of the alert message
  const [showAlert, setShowAlert] = useState(false);

  // Function to view order details
  const viewOrderDetails = (orderId) => {
    const selectedOrder = orders.find((order) => order.id === orderId);
    setSelectedOrder(selectedOrder);
  };

  // Function to toggle order status (Pending/Shipped)
  const toggleOrderStatus = (orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return {
          ...order,
          status: order.status === "Pending" ? "Shipped" : "Pending",
        };
      }
      return order;
    });
    setOrders(updatedOrders);
    setSelectedOrder(null);
  };

  // Function to delete an order
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    setSelectedOrder(null);
  };

  // Function to get orders for the selected date
  const getOrdersByDate = (date) => {
    return orders.filter(
      (order) =>
        new Date(order.orderDate).toDateString() === date.toDateString()
    );
  };

  // Function to handle date change on the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedOrder(null);
  };

  // Function to handle date click on the calendar, showing the alert only once
  const handleDateClick = (value, event) => {
    if (!showAlert) {
      alert("Orders are only on 8th and 9th of March.");
      setShowAlert(true);
    }
  };

  return (
    <div className="container d-flex justify-content-center flex-column">
      {/* Heading for Orders Dashboard */}
      <h1 className="text-center m-3">
        {" "}
        <strong> Orders Dashboard</strong>
      </h1>
      {/* Component for Cards (Assumed it contains relevant information) */}
      <Cards />
      {/* Heading for Orders List */}
      <h1 className="text-center m-3">
        {" "}
        <strong> Orders List</strong>
      </h1>
      {/* Calendar component for date selection */}
      <div className="d-flex justify-content-center m-3">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          onClickDay={handleDateClick}
        />
      </div>

      {/* Displaying orders for the selected date */}
      <h3 className="text-center">Orders for {selectedDate.toDateString()}</h3>
      {getOrdersByDate(selectedDate).length === 0 ? (
        <h5 className="text-center">No orders for the selected date.</h5>
      ) : (
        <ul className="text-center" style={{ fontSize: "1.25rem",listStyle: 'none' }}>
          {getOrdersByDate(selectedDate).map((order) => (
            <li key={order.id}>
              <span>Order ID: {order.id}</span>
              <span>Customer Name: {order.customerName}</span>
              <span>Order Date: {order.orderDate}</span>
              <span>Status: {order.status}</span>
              <button
                className="btn btn-success m-3"
                onClick={() => viewOrderDetails(order.id)}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Displaying selected order details */}
      {selectedOrder && (
        <div
          className="card container   mb-3  p-2"
          style={{ width: "20rem", backgroundColor: "#E4F0F4C9" }}
        >
          <h1 className="card-title text-center">Order Details</h1>
          <div className="card-body" style={{ width: "20rem" }}>
            <h5 class="card-text">Order ID: {selectedOrder.id}</h5>
            <h5 class="card-text">
              Customer Name: {selectedOrder.customerName}
            </h5>
            <h5 class="card-text">Order Date: {selectedOrder.orderDate}</h5>
            <h5 class="card-text">Status: {selectedOrder.status}</h5>
            {/* Button to toggle order status */}
            <button
              className="btn btn-warning m-1"
              onClick={() => toggleOrderStatus(selectedOrder.id)}
            >
              Toggle Status (Pending/Shipped)
            </button>
            {/* Button to delete order */}
            <button
              className="btn btn-danger m-1"
              onClick={() => deleteOrder(selectedOrder.id)}
            >
              Delete Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

import React, { useEffect, useState } from "react";
// Importing sample data for initial rendering
import { fakeData } from "./Data";

function Inventory() {
  // State to manage the list of products
  const [data, setData] = useState([]);
  // States for individual product details
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [id, setid] = useState(0);
  // State to track whether the form is in update mode
  const [isupdate, setisupdate] = useState(false);

  // useEffect to initialize the data on component mount
  useEffect(() => {
    setData(fakeData);
  }, []);

  // Function to handle editing a product
  const handleEdit = (id) => {
    // Filtering the product based on ID
    const dat = data.filter((item) => item.id == id);
    // Checking if the product exists
    if (dat !== undefined) {
      setisupdate(true);
      // Setting individual product details for editing
      setid(id);
      setname(dat[0].name);
      setcategory(dat[0].category);
      setprice(dat[0].price);
      setquantity(dat[0].quantity);
    }
  };

  // Function to handle deleting a product
  const handleDelete = (id) => {
    if (id > 0) {
      // Confirming the deletion with the user
      if (window.confirm("Are you want to delete this item?")) {
        // Filtering out the product with the specified ID
        const del = data.filter((item) => item.id !== id);
        setData(del);
      }
    }
  };

  // Function to handle saving a new product or updating an existing one
  const handleSave = (e) => {
    let error = "";
    // Validation checks for required fields and proper values
    if (name === "") error += "Name is required, ";
    if (category === "") error += "Category is required, ";
    if (price <= 0) error += "Proper Price is required, ";
    if (quantity <= 0) error += "Proper Quantity is required.";
    if (error === "") {
      // If there are no validation errors, proceed to save
      e.preventDefault();
      const dt = [...data];
      // Creating a new product object
      const newObj = {
        id: fakeData.length + 1,
        name: name,
        category: category,
        price: price,
        quantity: quantity,
      };
      // Adding the new product to the list
      dt.push(newObj);
      setData(dt);
    } else {
      // If there are validation errors, show an alert
      alert(error);
    }
    handleClear();
  };

  // Function to handle updating an existing product
  const handleUpdate = () => {
    // Finding the index of the product in the list
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    // Updating the details of the product at the specified index
    dt[index].name = name;
    dt[index].category = category;
    dt[index].price = price;
    dt[index].quantity = quantity;
    setData(dt);
    // Clearing the form after updating
    handleClear();
  };

  // Function to clear the form fields
  const handleClear = () => {
    setid(0);
    setname("");
    setcategory("");
    setprice("");
    setquantity("");
    setisupdate(false);
  };

  return (
    <div>
      <h1 className="text-center m-3">
        {" "}
        <strong> Product Management System</strong>
      </h1>
      <div className="container">
        <div className="row m-1">
          <div className="col-md-6">
            <label className="form-label">
              {" "}
              <strong> Product Name:</strong>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product name"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              {" "}
              <strong>Product Category: </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category name"
              onChange={(e) => setcategory(e.target.value)}
              value={category}
            />
          </div>
        </div>
        <div className="row m-1">
          <div className="col-md-6">
            <label className="form-label">
              {" "}
              <strong> Product Price: </strong>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price name"
              onChange={(e) => setprice(e.target.value)}
              value={price}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              {" "}
              <strong> Product Quantity:</strong>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Quantity name"
              onChange={(e) => setquantity(e.target.value)}
              value={quantity}
            />
          </div>
        </div>
        <div className="row mt-3 m-1">
          <div className="col-md-1">
            {!isupdate ? (
              <button
                className="btn btn-primary"
                onClick={(e) => handleSave(e)}
              >
                Save
              </button>
            ) : (
              <button className="btn btn-info" onClick={() => handleUpdate()}>
                Update
              </button>
            )}
          </div>
          <div className="col-md-1">
            <button className="btn btn-danger" onClick={() => handleClear()}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center m-3">
        {" "}
        <strong> Product Table</strong>
      </h1>
      <table className="table table-bordered table-hover table-sm table-info container text-center my-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;

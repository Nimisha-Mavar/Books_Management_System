import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:2000";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [Book_name, setBook_name] = useState("");
  const [Book_publisher, setBook_publisher] = useState("");
  const [Book_type, setBook_type] = useState("");
  const [Book_description, setBook_description] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = await axios.post(
      `${url}/`,
      { Book_name, Book_publisher, Book_type, Book_description },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(api);
    setVisible(false);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light p-2 d-flex">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            📚 Books Manager
          </a>
          <a
            className="navbar-brand btn btn-lg btn-primary text-light"
            onClick={() => setVisible(!visible)}
          >
            Add book
          </a>
        </div>
      </nav>
      {visible == true && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <form onSubmit={handleSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Book Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setVisible(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Book Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={Book_name}
                      onChange={(e) => setBook_name(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Publisher Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={Book_publisher}
                      onChange={(e) => setBook_publisher(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Book type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={Book_type}
                      onChange={(e) => setBook_type(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Book Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={Book_description}
                      onChange={(e) => setBook_description(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setVisible(false)}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Book
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

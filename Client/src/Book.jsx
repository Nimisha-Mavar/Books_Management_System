import React, { useEffect, useState } from "react";
import axios from "axios";

const Book = ({ books, reload, setReload }) => {
  const [visible, setVisible] = useState(false);
  const [Book_name, setBook_name] = useState("");
  const [Book_publisher, setBook_publisher] = useState("");
  const [Book_type, setBook_type] = useState("");
  const [Book_description, setBook_description] = useState("");
  const [id, setId] = useState("");
  //fetch data
  useEffect(() => {
    if (id) {
      for (let i = 0; i < books.length; i++) {
        if (id === books[i]._id) {
          setBook_name(books[i].Book_name);
          setBook_publisher(books[i].Book_publisher);
          setBook_type(books[i].Book_type);
          setBook_description(books[i].Book_description);
          break;
        }
      }
    }
  }, [reload]);

  //for delete book
  const deleteBook = async (id) => {
    const api = await axios.delete(`http://localhost:2000/${id}`, {
      header: {
        "Content-Type": "application/json",
      },
    });
    console.log(api);
    setReload(!reload);
  };

  //edit book
  const updateBook = async () => {
    const u_api = await axios.put(
      `http://localhost:2000/${id}`,
      { Book_name, Book_publisher, Book_type, Book_description },
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(u_api);
  };

  return (
    <>
      <div className="row justify-content-center p-4">
        {books.map((book) => (
          <div className="col-lg-3 pt-2 " key={book._id}>
            <div
              className="card shadow bg-white rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{book.Book_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <i class="fa-solid fa-user-tie"></i>&nbsp;&nbsp;
                  {book.Book_publisher}
                </h6>
                <p className="card-subtitle mb-2 text-muted">
                  Type : {book.Book_type}
                </p>
                <p className="card-text">{book.Book_description}</p>
                <div>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => {
                      setVisible(true);
                      setId(book._id);
                      setReload(!reload);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteBook(book._id)}
                  >
                    Del
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visible == true && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <form>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Book
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
                    onClick={() => setVisible(!visible)}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary "
                    onClick={() => updateBook()}
                  >
                    Update Book
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
export default Book;

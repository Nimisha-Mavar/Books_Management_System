import React from "react";

const Book = ({ books }) => {
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
                  <button className="btn btn-sm btn-primary">Edit</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn btn-sm btn-danger">Del</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Book;

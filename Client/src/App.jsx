import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const Url = "http://localhost:2000";
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fatchdata = async () => {
      const Api = await axios.get(`${Url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("this data coming from Api", Api.data.books);
      setBooks(Api.data.books);
    };
    fatchdata();
  }, [reload]);

  return (
    <>
      <ToastContainer />
      <Navbar reload={reload} setReload={setReload}></Navbar>
      <Book books={books} reload={reload} setReload={setReload}></Book>
    </>
  );
};

export default App;

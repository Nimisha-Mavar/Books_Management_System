import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const Url = "http://localhost:2000";
  const [books, setBooks] = useState([]);

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
  }, []);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default App;

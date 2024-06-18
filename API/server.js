import express from "express";
import mongoose from "mongoose";
import { Books } from "./BookModel.js";

const app = express();

//connect mongoodb database
mongoose
  .connect(
    "mongodb+srv://mavarnimisha95764:Y5QKssgpfDPTUAgE@cluster0.hkyow3s.mongodb.net/",
    { dbName: "MERN_Books_Management_System" }
  )
  .then(() => console.log("MongoDB connected succesfully"))
  .catch((err) => console.log(err));

//get all books

//add book

//delete book

//update book

app.listen(2000, () => console.log("Server is runing on 2000"));

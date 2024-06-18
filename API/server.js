import express from "express";
import mongoose from "mongoose";
import { Books } from "./BookModel.js";
import bodyParsher from "express";

const app = express();
app.use(bodyParsher.json());
//connect mongoodb database
mongoose
  .connect(
    "mongodb+srv://mavarnimisha95764:Y5QKssgpfDPTUAgE@cluster0.hkyow3s.mongodb.net/",
    { dbName: "MERN_Books_Management_System" }
  )
  .then(() => console.log("MongoDB connected succesfully"))
  .catch((err) => console.log(err));

//get all books
app.get("/", async (req, res) => {
  try {
    let books = await Books.find();
    res.json(console.log({ message: "Books found", books }));
  } catch (err) {
    res.json(console.log("book not foud"));
  }
});

//add book
app.post("/", async (req, res) => {
  const { Book_name, Book_publisher, Book_type, Book_description } = req.body;
  try {
    let get_book = await Books.findOne({ Book_name });
    if (get_book) return res.json({ message: "Book alredy exist" });
    let book = await Books.create({
      Book_name,
      Book_publisher,
      Book_type,
      Book_description,
    });
    res.json({ message: "Book added successfully", book });
  } catch (error) {
    res.json({ message: error.message() });
  }
});
//delete book

//update book

app.listen(2000, () => console.log("Server is runing on 2000"));

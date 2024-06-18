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
  } catch (error) {
    res.json(console.log({ message: error.message }));
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
    res.json(console.log({ message: error.message }));
  }
});

//delete book
app.delete("/:bid", async (req, res) => {
  const id = req.params.bid;
  try {
    let book = await Books.findById(id);
    if (!book) return res.json({ message: "book not exist" });
    else {
      await book.deleteOne();
      res.json({ message: "book deleted successfully" });
    }
  } catch (error) {
    res.json(console.log({ message: error.message }));
  }
});

//update book
app.put("/:bid", async (req, res) => {
  const id = req.params.bid;
  const updatedBook = req.body;
  try {
    const book = await Books.findById(id);
    if (!book) return res.json({ message: "Book not exist" });
    else {
      let data = await Books.findByIdAndUpdate(id, updatedBook, { new: true });
      res.json(console.log({ message: "Book Updated Successfully", data }));
    }
  } catch (error) {
    res.json(console.log({ message: error.message }));
  }
});

app.listen(2000, () => console.log("Server is runing on 2000"));

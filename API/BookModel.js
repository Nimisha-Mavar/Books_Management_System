import mongoose, { Types } from "mongoose";

const BookSchema = new mongoose.Schema({
  Book_name: {
    type: String,
    require: true,
  },
  Book_publisher: {
    type: String,
    require: true,
  },
  Book_type: {
    type: String,
    require: true,
  },
  Book_description: {
    type: String,
    require: true,
  },
  created_At: {
    type: Date,
    require: true,
  },
});

export const Books = mongoose.model("Books", BookSchema);

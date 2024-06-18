import express from "express";
import mongoose from "mongoose";

const app = express();

//connect mongoodb database
mongoose
  .connect(
    "mongodb+srv://mavarnimisha95764:Y5QKssgpfDPTUAgE@cluster0.hkyow3s.mongodb.net/",
    { dbName: "MERN_Books_Management_Syatem" }
  )
  .then(() => console.log("MongoDB connected succesfully"))
  .catch((error) => console.log(error));

// app.get("/", (req, res) => {
//   res.json({ message: "Server is runing on 2000" });
// });
app.listen(2000, () => console.log("Server is runing on 2000"));

//mavarnimisha95764 - username
//Y5QKssgpfDPTUAgE - password

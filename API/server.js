import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Server is runing on 2000" });
});
app.listen(2000, () => console.log("Server is runing on 2000"));

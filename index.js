const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/express_demo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

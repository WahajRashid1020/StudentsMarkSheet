const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json({}));

app.use("/api/students", require("./api/student"));

app.listen(5000, () => {
  console.log("Server running at 5000");
});

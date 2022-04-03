const express = require("express");
const cors = require("cors");
const passport = require("passport");

const db = require("./db");

const app = express();

app.use(cors({ credentials: true, origin: true }));

// ---------------- ERROR HANDLING ----------------------

app.use((err, req, res, next) => {
  if (!err.message) err.message = "Something went wrong";
  console.log(err);
  res.status(200).json({
    status: "failed",
    message: err.message,
  });
});

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});

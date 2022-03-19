const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

// Access public folder
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

// view engine setup
app.set("view engine", "ejs");

// ROUTES
app.use("/auth", require("./server/routes/auth"));
app.use("/", require("./server/routes/pages"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port${PORT}`);
});
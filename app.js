const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

// Access public folder
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Parse JSON bodies (as sent by API clients)
app.use(cookieParser());

// view engine setup
app.set("view engine", "ejs");

// ROUTES
app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/pages"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port${PORT}`);
});
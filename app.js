const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

// access public folder
const publicDirectory = path.join(__dirname, "./public" );
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
// Makes sure you can grab the data from any from
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
// Makin sure values we grab from form come in as JSON
app.use(express.json());
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
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var app = express();

// Middleware
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files (HTML, JS, CSS) from /public
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, "public"));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

module.exports = app;

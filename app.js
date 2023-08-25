const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const { usersRouter, contactsRoter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("tmp"));

app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRoter);

app.use((__, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;

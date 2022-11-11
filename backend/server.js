const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connect = require("./db/connect");
const PORT = process.env.PORT || 5000;
const app = express();

// DB connection
connect();

// App config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", require("./routers/userRouter"));
app.use("/api/todos", require("./routers/todoRouter"));

app.listen(
  PORT,
  console.log(
    `App running on port:` + ` http://localhost:${PORT}`.cyan.underline.blue
  )
);

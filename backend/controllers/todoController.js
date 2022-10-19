const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

const setTask = asyncHandler(async (req, res) => {
  const TaskTodo = await Todo.create({
    user: req.user.id,
    todo: req.body.text,
  });

  if (TaskTodo) {
    res.status(201).json({ TaskTodo });
  } else {
    res.status(400);
    throw new Error("something wrong!!!");
  }
});

const getTasks = asyncHandler(async (req, res) => {
  const Tasks = await Todo.find({ user: req.user.id });

  res.status(200).json({ Tasks });
});

module.exports = { setTask, getTasks };

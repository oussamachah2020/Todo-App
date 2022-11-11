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

const deleteTask = asyncHandler(async (req, res) => {
  const deleteTask = await Todo.findByIdAndRemove(req.params.id, req.body);

  const task = await Todo.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("task not found");
  }

//   //? check for user
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  res.status(200).json({ deleteTask });
});

module.exports = { setTask, getTasks, deleteTask };

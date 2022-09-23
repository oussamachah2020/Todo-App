const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  todo: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", bookSchema);
module.exports = Todo;

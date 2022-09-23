const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: ["username required", true],
    },
    email: {
      type: String,
      required: ["email required", true],
    },
    password: {
      type: String,
      required: ["password required", true],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;

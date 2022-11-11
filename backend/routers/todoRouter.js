const express = require("express");
const router = express.Router();
const {
  setTask,
  getTasks,
  deleteTask
} = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddelaware");

router.post("/", protect, setTask);
router.get("/getTasks", protect, getTasks);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;

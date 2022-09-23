const express = require("express");
const router = express.Router();
const { setTask, getTasks } = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddelaware");

router.post("/", protect, setTask);
router.get("/getTasks", protect, getTasks);

module.exports = router;

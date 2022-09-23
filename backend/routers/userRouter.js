const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddelaware");

router.post("/", register).post("/login", login);
router.get("/getUser", protect, getUser);

module.exports = router;
